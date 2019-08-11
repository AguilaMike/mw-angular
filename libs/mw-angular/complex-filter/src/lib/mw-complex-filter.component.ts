import { ComponentPortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { debounceTime, map, switchMap, takeUntil } from 'rxjs/operators';
import { MwComplexFilterChangeEventModel } from './entities/mw-complex-filter-change-event-model';
import {
  MwComplexFilterCommonComponentModel,
  MwComplexFilterComponentModel,
  MwComplexFilterVirtualComponentModel,
} from './entities/mw-complex-filter-component-model';
import { MwComplexFilterConfigModel } from './entities/mw-complex-filter-config-model';
import { MwComplexFilterEventModel, MwComplexFilterEventType } from './entities/mw-complex-filter-event-model';
import { MwComplexFilterModifiedStreamModel } from './entities/mw-complex-filter-modified-stream-model';
import {
  MwComplexFilterExpandedPortalModel,
  MwComplexFilterPortalModel,
} from './entities/mw-complex-filter-portal-model';
import { MwComplexFilterSelectorModel } from './entities/mw-complex-filter-selector-model';
import { MwComplexFilterEventBusService } from './services/mw-complex-filter-event-bus.service';
import { MwComplexFilterPortalCreationService } from './services/mw-complex-filter-portal-creation.service';
import { MW_COMPLEX_FILTER_COMPONENT_DATA } from './tokens/mw-complex-filter-component-data.token';
import { MW_COMPLEX_FILTER_DELETE_BUTTON_DATA } from './tokens/mw-complex-filter-delete-button-data.token';
import { MW_COMPLEX_FILTER_FILTERS_SELECTOR_DATA } from './tokens/mw-complex-filter-filters-selector-data.token';
import { MW_COMPLEX_FILTER_RESET_BUTTON_DATA } from './tokens/mw-complex-filter-reset-button-data.token';

@Component({
  selector: 'mw-complex-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [MwComplexFilterPortalCreationService, MwComplexFilterEventBusService],
  template: `
    <mw-complex-filter-inner
      [filtersSelectorPortal]="filtersSelectorPortal"
      [resetButtonPortal]="resetButtonPortal"
      [fixedPortalModels]="fixedPortalModelsSubject | async"
      [shownPortalModels]="shownPortalModelsSubject | async"
    ></mw-complex-filter-inner>
  `,
})
export class MwComplexFilterComponent implements OnDestroy {
  @Input()
  set config(config: MwComplexFilterConfigModel) {
    if (config) {
      this._config = config;

      this.filtersSelectorPortal = this.mwComplexFilterPortalCreationService.createPortal(
        config.filtersSelector.component,
        MW_COMPLEX_FILTER_FILTERS_SELECTOR_DATA,
        {
          ...config.filtersSelector.data,
          filters$: this.selectorFiltersSubject.asObservable(),
        },
      );

      this.resetButtonPortal = this.mwComplexFilterPortalCreationService.createPortal(
        config.resetButton.component,
        MW_COMPLEX_FILTER_RESET_BUTTON_DATA,
        config.resetButton.data || {},
      );

      this.resetFilters(config);
    }
  }

  get config(): MwComplexFilterConfigModel {
    return this._config;
  }

  private _config: MwComplexFilterConfigModel;

  @Input() debounceTime = 100;

  @Output() changeEvent = new EventEmitter<MwComplexFilterChangeEventModel>();

  filtersSelectorPortal: ComponentPortal<any>;
  resetButtonPortal: ComponentPortal<any>;
  fixedPortalModelsSubject = new BehaviorSubject<MwComplexFilterPortalModel[]>([]);
  shownPortalModelsSubject = new BehaviorSubject<MwComplexFilterExpandedPortalModel[]>([]);
  private hiddenPortalModelsSubject = new BehaviorSubject<MwComplexFilterExpandedPortalModel[]>([]);
  private virtualModelsSubject = new BehaviorSubject<MwComplexFilterVirtualComponentModel[]>([]);
  private selectorFiltersSubject = new BehaviorSubject<MwComplexFilterSelectorModel[]>([]);
  private destroySubject = new Subject<void>();

  constructor(
    private mwComplexFilterPortalCreationService: MwComplexFilterPortalCreationService,
    private mwComplexFilterEventBusService: MwComplexFilterEventBusService,
  ) {
    this.initChangesEvent();
    this.initToggleFilters();
    this.initResetFilters();
  }

  private showFilter(id: string): void {
    console.log('show', id);
  }

  private hideFilter(id: string): void {
    console.log('hide', id);
  }

  private initChangesEvent(): void {
    combineLatest(this.fixedPortalModelsSubject, this.shownPortalModelsSubject, this.virtualModelsSubject)
      .pipe(
        debounceTime(this.debounceTime),
        switchMap(([fixedPortalModels, shownPortalModels, virtualModels]) => {
          const streams: Observable<MwComplexFilterModifiedStreamModel>[] = [];

          [...fixedPortalModels, ...shownPortalModels, ...virtualModels].forEach(
            (model: MwComplexFilterPortalModel | MwComplexFilterVirtualComponentModel) => {
              streams.push(this.modifyControlValue(model.id, model.control));
            },
          );

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

  private initToggleFilters(): void {
    this.mwComplexFilterEventBusService
      .getStream([MwComplexFilterEventType.ShowFilter, MwComplexFilterEventType.HideFilter])
      .pipe(takeUntil(this.destroySubject))
      .subscribe((event: MwComplexFilterEventModel) => {
        if (event.eventType === MwComplexFilterEventType.ShowFilter) {
          this.showFilter(event.data.id);
        } else {
          this.hideFilter(event.data.id);
        }
      });
  }

  private initResetFilters(): void {
    this.mwComplexFilterEventBusService
      .getStream([MwComplexFilterEventType.ResetFilters])
      .pipe(takeUntil(this.destroySubject))
      .subscribe(() => {
        this.resetFilters(this.config);
      });
  }

  private resetFilters(config: MwComplexFilterConfigModel): void {
    this.fixedPortalModelsSubject.next(
      config.fixedFilters.map(
        (componentModel: MwComplexFilterComponentModel) =>
          this.buildPortalModel(componentModel) as MwComplexFilterPortalModel,
      ),
    );

    this.shownPortalModelsSubject.next([]);

    this.hiddenPortalModelsSubject.next(
      config.optionalFilters.map(
        (componentModel: MwComplexFilterComponentModel) =>
          this.buildPortalModel(componentModel, config.deleteButton) as MwComplexFilterExpandedPortalModel,
      ),
    );

    this.selectorFiltersSubject.next(
      config.optionalFilters.map((componentModel: MwComplexFilterComponentModel) => ({
        id: componentModel.id,
        label: componentModel.label,
        selected: true,
      })),
    );

    this.virtualModelsSubject.next(config.virtualFilters || []);
  }

  private buildPortalModel(
    componentModel: MwComplexFilterComponentModel,
    deleteButton?: MwComplexFilterCommonComponentModel,
  ): MwComplexFilterPortalModel | MwComplexFilterExpandedPortalModel {
    const control = new BehaviorSubject(componentModel.defaultValue);

    if (componentModel.data) {
      if (componentModel.data.id || componentModel.data.label || componentModel.data.control) {
        throw new Error('Forbidden data values.');
      }
    }

    const result: MwComplexFilterPortalModel = {
      id: componentModel.id,
      control,
      filterPortal: this.mwComplexFilterPortalCreationService.createPortal(
        componentModel.component,
        MW_COMPLEX_FILTER_COMPONENT_DATA,
        {
          ...componentModel.data,
          id: componentModel.id,
          label: componentModel.label,
          control,
        },
      ),
    };

    if (deleteButton !== undefined) {
      (result as MwComplexFilterExpandedPortalModel).deleteButtonPortal = this.mwComplexFilterPortalCreationService.createPortal(
        deleteButton.component,
        MW_COMPLEX_FILTER_DELETE_BUTTON_DATA,
        {
          ...deleteButton.data,
          id: componentModel.id,
        },
      );
    }

    return result;
  }

  private modifyControlValue(id: string, control: Observable<any>): Observable<MwComplexFilterModifiedStreamModel> {
    return control.pipe(map((value: any) => ({ id, value })));
  }

  public ngOnDestroy(): void {
    this.destroySubject.next();
    this.destroySubject.complete();
  }
}
