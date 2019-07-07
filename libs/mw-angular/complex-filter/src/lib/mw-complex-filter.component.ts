import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { MwComplexFilterChangeEventModel } from './entities/mw-complex-filter-change-event-model';
import { MwComplexFilterComponentModel } from './entities/mw-complex-filter-component-model';
import { MwComplexFilterConfigModel } from './entities/mw-complex-filter-config-model';
import { MwComplexFilterModifiedStreamModel } from './entities/mw-complex-filter-modified-stream-model';
import { MwComplexFilterPortalModel } from './entities/mw-complex-filter-portal-model';
import { MwComplexFilterVirtualComponentModel } from './entities/mw-complex-filter-virtual-component-model';
import { MwComplexFilterPortalCreationService } from './services/mw-complex-filter-portal-creation.service';

@Component({
  selector: 'mw-complex-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [MwComplexFilterPortalCreationService],
  template: `
    <mw-complex-filter-inner
      [defaultPortalModels]="defaultPortalModelsSubject | async"
      [dynamicPortalModels]="dynamicPortalModelsSubject | async"
    ></mw-complex-filter-inner>
  `,
})
export class MwComplexFilterComponent implements OnDestroy {
  @Input()
  set config(config: MwComplexFilterConfigModel) {
    if (config) {
      this._config = config;

      this.defaultPortalModelsSubject.next(
        config.defaultFilters.map((componentModel: MwComplexFilterComponentModel) =>
          this.buildPortalModel(componentModel),
        ),
      );

      this.dynamicPortalModelsSubject.next([]);
      this.virtualModelsSubject.next(config.virtualFilters || []);
    }
  }

  get config(): MwComplexFilterConfigModel {
    return this._config;
  }

  @Output() changeEvent = new EventEmitter<MwComplexFilterChangeEventModel>();

  defaultPortalModelsSubject = new BehaviorSubject<MwComplexFilterPortalModel[]>([]);
  dynamicPortalModelsSubject = new BehaviorSubject<MwComplexFilterPortalModel[]>([]);
  virtualModelsSubject = new BehaviorSubject<MwComplexFilterVirtualComponentModel[]>([]);

  private _config: MwComplexFilterConfigModel;
  private destroySubject = new Subject();

  constructor(private mwComplexFilterPortalCreationService: MwComplexFilterPortalCreationService) {
    this.initChangesEvent();
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
    return {
      id: componentModel.id,
      control: new BehaviorSubject(componentModel.defaultValue),
      portal: this.mwComplexFilterPortalCreationService.createPortal(componentModel.component, componentModel.data),
    };
  }

  private modifyControlValue(id: string, control: Observable<any>): Observable<MwComplexFilterModifiedStreamModel> {
    return control.pipe(map((value: any) => ({ id, value })));
  }

  public ngOnDestroy(): void {
    this.destroySubject.next();
    this.destroySubject.complete();
  }
}
