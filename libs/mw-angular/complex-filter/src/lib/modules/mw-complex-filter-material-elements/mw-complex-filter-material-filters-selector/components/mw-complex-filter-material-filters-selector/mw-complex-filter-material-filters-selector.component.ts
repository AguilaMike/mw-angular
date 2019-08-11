import { ChangeDetectionStrategy, Component, Inject, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MwComplexFilterFiltersSelectorDataModel } from '../../../../../entities/mw-complex-filter-data-model';
import { MwComplexFilterEventType } from '../../../../../entities/mw-complex-filter-event-model';
import { MwComplexFilterSelectorModel } from '../../../../../entities/mw-complex-filter-selector-model';
import { MwComplexFilterEventBusService } from '../../../../../services/mw-complex-filter-event-bus.service';
import { MW_COMPLEX_FILTER_FILTERS_SELECTOR_DATA } from '../../../../../tokens/mw-complex-filter-filters-selector-data.token';

@Component({
  selector: 'mw-complex-filter-material-filters-selector',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mw-complex-filter-material-filters-selector.component.html',
  styleUrls: ['./mw-complex-filter-material-filters-selector.component.scss'],
})
export class MwComplexFilterMaterialFiltersSelectorComponent implements OnDestroy {
  value: string[] = [];

  private destroySubject = new Subject<void>();

  constructor(
    @Inject(MW_COMPLEX_FILTER_FILTERS_SELECTOR_DATA) public data: MwComplexFilterFiltersSelectorDataModel,
    private mwComplexFilterEventBusService: MwComplexFilterEventBusService,
  ) {
    data.filters$
      .pipe(takeUntil(this.destroySubject))
      .subscribe(
        (filters: MwComplexFilterSelectorModel[]) =>
          (this.value = filters
            .filter((filter: MwComplexFilterSelectorModel) => filter.selected)
            .map((filter: MwComplexFilterSelectorModel) => filter.id)),
      );
  }

  onChange(value: string[]): void {
    console.log(value, this.value);
    this.mwComplexFilterEventBusService.emit(MwComplexFilterEventType.ShowFilter);
  }

  public ngOnDestroy(): void {
    this.destroySubject.next();
    this.destroySubject.complete();
  }
}
