import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MwComplexFilterMaterialElementTextDataModel } from '../../entities/mw-complex-filter-material-element-text-data-model';

@Component({
  selector: 'mw-complex-filter-material-element-text-overlay',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mw-complex-filter-material-element-text-overlay.component.html',
  styleUrls: ['./mw-complex-filter-material-element-text-overlay.component.scss'],
})
export class MwComplexFilterMaterialElementTextOverlayComponent {
  @Input() data: MwComplexFilterMaterialElementTextDataModel;

  @Output() changeValueEvent = new EventEmitter<string>();
}
