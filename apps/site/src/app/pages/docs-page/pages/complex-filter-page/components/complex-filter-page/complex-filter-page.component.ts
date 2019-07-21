import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MwComplexFilterConfigModel, MwComplexFilterMaterialElementTextComponent } from '@mw-angular/complex-filter';
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
        component: MwComplexFilterMaterialElementTextComponent,
        data: {
          label: 'One',
          emptyValuePlaceholder: 'any',
        },
      },
      {
        id: 'second',
        defaultValue: '',
        component: MwComplexFilterMaterialElementTextComponent,
        data: {
          label: 'Two',
          emptyValuePlaceholder: 'any',
        },
      },
      {
        id: 'third',
        defaultValue: '',
        component: MwComplexFilterMaterialElementTextComponent,
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
        component: MwComplexFilterMaterialElementTextComponent,
        data: {
          label: 'Four',
          emptyValuePlaceholder: 'any',
        },
      },
      {
        id: 'dynamic-fifth',
        defaultValue: '',
        component: MwComplexFilterMaterialElementTextComponent,
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
