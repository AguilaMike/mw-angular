import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MwComplexFilterElementTextDataModel } from '../../entities/mw-complex-filter-element-text-data-model';

@Component({
  selector: 'mw-material-complex-filter-element-text-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mw-material-complex-filter-element-text-label.component.html',
  styleUrls: ['./mw-material-complex-filter-element-text-label.component.scss'],
})
export class MwMaterialComplexFilterElementTextLabelComponent {
  @Input() data: MwComplexFilterElementTextDataModel;
}
