import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MwComplexFilterComponentDataModel } from '../../../../../entities/mw-complex-filter-component-data-model';
import { MW_COMPLEX_FILTER_COMPONENT_DATA } from '../../../../../tokens/mw-complex-filter-component-data.token';

@Component({
  selector: 'mw-material-complex-filter-element-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mw-material-complex-filter-element-text.component.html',
  styleUrls: ['./mw-material-complex-filter-element-text.component.scss'],
})
export class MwMaterialComplexFilterElementTextComponent {
  isOpened = false;

  constructor(@Inject(MW_COMPLEX_FILTER_COMPONENT_DATA) public data: MwComplexFilterComponentDataModel) {}
}
