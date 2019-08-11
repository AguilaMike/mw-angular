import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MwComplexFilterDataModel } from '../../../../../entities/mw-complex-filter-data-model';
import { MwComplexFilterEventType } from '../../../../../entities/mw-complex-filter-event-model';
import { MwComplexFilterEventBusService } from '../../../../../services/mw-complex-filter-event-bus.service';
import { MW_COMPLEX_FILTER_RESET_BUTTON_DATA } from '../../../../../tokens/mw-complex-filter-reset-button-data.token';

@Component({
  selector: 'mw-complex-filter-material-reset-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mw-complex-filter-material-reset-button.component.html',
  styleUrls: ['./mw-complex-filter-material-reset-button.component.scss'],
})
export class MwComplexFilterMaterialResetButtonComponent {
  constructor(
    @Inject(MW_COMPLEX_FILTER_RESET_BUTTON_DATA) private data: MwComplexFilterDataModel,
    private mwComplexFilterEventBusService: MwComplexFilterEventBusService,
  ) {
    if (this.data) {
      // CAN HAVE SOME DATA
    }
  }

  onClick(): void {
    this.mwComplexFilterEventBusService.emit(MwComplexFilterEventType.ResetFilters);
  }
}
