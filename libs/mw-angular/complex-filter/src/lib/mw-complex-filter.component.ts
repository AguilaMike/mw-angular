import { ComponentPortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { debounceTime, map, switchMap, takeUntil } from 'rxjs/operators';
import { MwComplexFilterChangeEventModel } from './entities/mw-complex-filter-change-event-model';
import { MwComplexFilterComponentModel } from './entities/mw-complex-filter-component-model';
import { MwComplexFilterConfigModel } from './entities/mw-complex-filter-config-model';
import { MwComplexFilterModifiedStreamModel } from './entities/mw-complex-filter-modified-stream-model';
import { MwComplexFilterPortalModel } from './entities/mw-complex-filter-portal-model';
import { MwComplexFilterVirtualComponentModel } from './entities/mw-complex-filter-virtual-component-model';
import { MwComplexFilterPortalCreationService } from './services/mw-complex-filter-portal-creation.service';

interface FiltersMap {
  [id: string]: MwComplexFilterComponentModel;
}

@Component({
  selector: 'mw-complex-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [MwComplexFilterPortalCreationService],
  template: `
    <mw-complex-filter-inner
      [deleteButtonPortal]="deleteButtonPortal"
      [defaultPortalModels]="defaultPortalModelsSubject | async"
      [dynamicPortalModels]="dynamicPortalModelsSubject | async"
      (hideDynamicFilterEvent)="onHideDynamicFilter($event)"
    ></mw-complex-filter-inner>
  `,
})
export class MwComplexFilterComponent implements OnDestroy {
  @Input()
  set config(config: MwComplexFilterConfigModel) {
    if (config) {
      this._config = config;

      this.deleteButtonPortal = new ComponentPortal(config.deleteButtonComponent);

      this.defaultPortalModelsSubject.next(
        config.defaultFilters.map((componentModel: MwComplexFilterComponentModel) =>
          this.buildPortalModel(componentModel),
        ),
      );

      this.virtualModelsSubject.next(config.virtualFilters || []);

      this.dynamicPortalModelsSubject.next([]);
      if (config.dynamicFilters) {
        this.dynamicFiltersMap = this.convertFiltersToMap(config.dynamicFilters);
      }
    }
  }

  get config(): MwComplexFilterConfigModel {
    return this._config;
  }

  @Input() debounceTime = 100;

  @Output() changeEvent = new EventEmitter<MwComplexFilterChangeEventModel>();

  deleteButtonPortal: ComponentPortal<any>;
  defaultPortalModelsSubject = new BehaviorSubject<MwComplexFilterPortalModel[]>([]);
  dynamicPortalModelsSubject = new BehaviorSubject<MwComplexFilterPortalModel[]>([]);
  private virtualModelsSubject = new BehaviorSubject<MwComplexFilterVirtualComponentModel[]>([]);
  private dynamicFiltersMap: FiltersMap = {};
  private _config: MwComplexFilterConfigModel;
  private destroySubject = new Subject();

  constructor(private mwComplexFilterPortalCreationService: MwComplexFilterPortalCreationService) {
    this.initChangesEvent();
  }

  onShowDynamicFilter(id: string): void {
    if (!this.dynamicFiltersMap[id]) {
      throw new Error('Filter does not exist.');
    }

    const dynamicPortalModel = this.buildPortalModel(this.dynamicFiltersMap[id]);
    this.dynamicPortalModelsSubject.next([...this.dynamicPortalModelsSubject.getValue(), dynamicPortalModel]);
  }

  onHideDynamicFilter(id: string): void {
    const dynamicFilters = this.dynamicPortalModelsSubject
      .getValue()
      .filter((item: MwComplexFilterPortalModel) => item.id !== id);
    this.dynamicPortalModelsSubject.next(dynamicFilters);
  }

  private initChangesEvent(): void {
    combineLatest(this.defaultPortalModelsSubject, this.dynamicPortalModelsSubject, this.virtualModelsSubject)
      .pipe(
        switchMap(([defaultPortalModels, dynamicPortalModels, virtualModels]) => {
          const streams: Observable<MwComplexFilterModifiedStreamModel>[] = [];

          defaultPortalModels.forEach((model: MwComplexFilterPortalModel) => {
            streams.push(this.modifyControlValue(model.id, model.control));
          });

          dynamicPortalModels.forEach((model: MwComplexFilterPortalModel) => {
            streams.push(this.modifyControlValue(model.id, model.control));
          });

          virtualModels.forEach((model: MwComplexFilterVirtualComponentModel) => {
            streams.push(this.modifyControlValue(model.id, model.control));
          });

          return combineLatest(...streams);
        }),
        debounceTime(this.debounceTime),
        takeUntil(this.destroySubject),
      )
      .subscribe((values: MwComplexFilterModifiedStreamModel[]) => {
        const result = values.reduce((acc: MwComplexFilterChangeEventModel, item) => {
          acc[item.id] = item.value;
          return acc;
        }, {});

        this.changeEvent.emit(result);
      });
  }

  private buildPortalModel(componentModel: MwComplexFilterComponentModel): MwComplexFilterPortalModel {
    const control = new BehaviorSubject(componentModel.defaultValue);

    return {
      id: componentModel.id,
      control,
      portal: this.mwComplexFilterPortalCreationService.createPortal(componentModel.component, {
        ...componentModel.data,
        id: componentModel.id,
        label: componentModel.label,
        control,
      }),
    };
  }

  private modifyControlValue(id: string, control: Observable<any>): Observable<MwComplexFilterModifiedStreamModel> {
    return control.pipe(map((value: any) => ({ id, value })));
  }

  private convertFiltersToMap(filters: MwComplexFilterComponentModel[]): FiltersMap {
    return filters.reduce((result: FiltersMap, filter: MwComplexFilterComponentModel) => {
      result[filter.id] = filter;
      return result;
    }, {});
  }

  public ngOnDestroy(): void {
    this.destroySubject.next();
    this.destroySubject.complete();
  }
}
