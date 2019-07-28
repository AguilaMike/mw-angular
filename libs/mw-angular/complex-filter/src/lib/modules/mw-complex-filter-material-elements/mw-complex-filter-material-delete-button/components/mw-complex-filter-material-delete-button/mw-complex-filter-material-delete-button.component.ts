import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MwComplexFilterEventType } from '../../../../../entities/mw-complex-filter-event-model';
import { MwComplexFilterEventBusService } from '../../../../../services/mw-complex-filter-event-bus.service';

@Component({
  selector: 'mw-complex-filter-material-delete-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mw-complex-filter-material-delete-button.component.html',
  styleUrls: ['./mw-complex-filter-material-delete-button.component.scss'],
})
export class MwComplexFilterMaterialDeleteButtonComponent {
  constructor(private mwComplexFilterEventBusService: MwComplexFilterEventBusService) {}

  onClick(): void {
    this.mwComplexFilterEventBusService.emit(MwComplexFilterEventType.HideFilter);
  }
}
