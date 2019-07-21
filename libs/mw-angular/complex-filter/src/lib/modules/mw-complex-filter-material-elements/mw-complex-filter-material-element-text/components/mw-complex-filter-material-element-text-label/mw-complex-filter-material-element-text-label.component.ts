import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MwComplexFilterMaterialElementTextDataModel } from '../../entities/mw-complex-filter-material-element-text-data-model';

@Component({
  selector: 'mw-complex-filter-material-element-text-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mw-complex-filter-material-element-text-label.component.html',
  styleUrls: ['./mw-complex-filter-material-element-text-label.component.scss'],
})
export class MwComplexFilterMaterialElementTextLabelComponent {
  @Input() data: MwComplexFilterMaterialElementTextDataModel;
}
