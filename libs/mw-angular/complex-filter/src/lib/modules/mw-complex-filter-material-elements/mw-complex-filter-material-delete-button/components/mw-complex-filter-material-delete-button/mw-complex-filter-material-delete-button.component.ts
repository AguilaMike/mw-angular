import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MwComplexFilterDeleteButtonDataModel } from '../../../../../entities/mw-complex-filter-data-model';
import { MwComplexFilterEventType } from '../../../../../entities/mw-complex-filter-event-model';
import { MwComplexFilterEventBusService } from '../../../../../services/mw-complex-filter-event-bus.service';
import { MW_COMPLEX_FILTER_DELETE_BUTTON_DATA } from '../../../../../tokens/mw-complex-filter-delete-button-data.token';

@Component({
  selector: 'mw-complex-filter-material-delete-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mw-complex-filter-material-delete-button.component.html',
  styleUrls: ['./mw-complex-filter-material-delete-button.component.scss'],
})
export class MwComplexFilterMaterialDeleteButtonComponent {
  constructor(
    @Inject(MW_COMPLEX_FILTER_DELETE_BUTTON_DATA) private data: MwComplexFilterDeleteButtonDataModel,
    private mwComplexFilterEventBusService: MwComplexFilterEventBusService,
  ) {
    if (!data || !data.id) {
      throw new Error('Incorrect data params.');
    }
  }

  onClick(): void {
    this.mwComplexFilterEventBusService.emit(MwComplexFilterEventType.HideFilter, { id: this.data.id });
  }
}
