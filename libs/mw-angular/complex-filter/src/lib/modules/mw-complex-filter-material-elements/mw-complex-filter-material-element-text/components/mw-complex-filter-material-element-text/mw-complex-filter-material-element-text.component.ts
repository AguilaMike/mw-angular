import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MW_COMPLEX_FILTER_COMPONENT_DATA } from '../../../../../tokens/mw-complex-filter-component-data.token';
import { MwComplexFilterMaterialElementTextDataModel } from '../../entities/mw-complex-filter-material-element-text-data-model';

@Component({
  selector: 'mw-complex-filter-material-element-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mw-complex-filter-material-element-text.component.html',
  styleUrls: ['./mw-complex-filter-material-element-text.component.scss'],
})
export class MwComplexFilterMaterialElementTextComponent {
  isOpened = false;

  constructor(@Inject(MW_COMPLEX_FILTER_COMPONENT_DATA) public data: MwComplexFilterMaterialElementTextDataModel) {}

  onChangeValueEvent(value: string): void {
    this.data.control.next(value);
  }
}
