import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MwComplexFilterFiltersSelectorDataModel } from '../../../../../entities/mw-complex-filter-data-model';
import { MwComplexFilterEventType } from '../../../../../entities/mw-complex-filter-event-model';
import { MwComplexFilterEventBusService } from '../../../../../services/mw-complex-filter-event-bus.service';
import { MW_COMPLEX_FILTER_FILTERS_SELECTOR_DATA } from '../../../../../tokens/mw-complex-filter-filters-selector-data.token';

@Component({
  selector: 'mw-complex-filter-material-filters-selector',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mw-complex-filter-material-filters-selector.component.html',
  styleUrls: ['./mw-complex-filter-material-filters-selector.component.scss'],
})
export class MwComplexFilterMaterialFiltersSelectorComponent {
  constructor(
    @Inject(MW_COMPLEX_FILTER_FILTERS_SELECTOR_DATA) public data: MwComplexFilterFiltersSelectorDataModel,
    private mwComplexFilterEventBusService: MwComplexFilterEventBusService,
  ) {}

  onChange(): void {
    this.mwComplexFilterEventBusService.emit(MwComplexFilterEventType.ResetFilters);
  }
}
