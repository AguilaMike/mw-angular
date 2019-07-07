import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MwComplexFilterConfigModel, MwMaterialComplexFilterElementTextComponent } from '@mw-angular/complex-filter';
import { timer } from 'rxjs';

@Component({
  selector: 'app-complex-filter-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './complex-filter-page.component.html',
  styleUrls: ['./complex-filter-page.component.scss'],
})
export class ComplexFilterPageComponent {
  complexFilterConfig: MwComplexFilterConfigModel = {
    defaultFilters: [
      {
        id: 'first',
        defaultValue: '',
        component: MwMaterialComplexFilterElementTextComponent,
        data: {
          label: 'One',
          emptyValuePlaceholder: 'any',
        },
      },
      {
        id: 'second',
        defaultValue: '',
        component: MwMaterialComplexFilterElementTextComponent,
        data: {
          label: 'Two',
          emptyValuePlaceholder: 'any',
        },
      },
      {
        id: 'third',
        defaultValue: '',
        component: MwMaterialComplexFilterElementTextComponent,
        data: {
          label: 'Three',
          emptyValuePlaceholder: 'any',
        },
      },
    ],
    dynamicFilters: [
      {
        id: 'dynamic-fourth',
        defaultValue: '',
        component: MwMaterialComplexFilterElementTextComponent,
        data: {
          label: 'Four',
          emptyValuePlaceholder: 'any',
        },
      },
      {
        id: 'dynamic-fifth',
        defaultValue: '',
        component: MwMaterialComplexFilterElementTextComponent,
        data: {
          label: 'Five',
          emptyValuePlaceholder: 'any',
        },
      },
    ],
    virtualFilters: [
      {
        id: 'virtual-sixth',
        control: timer(0, 10000),
      },
    ],
  };
}
