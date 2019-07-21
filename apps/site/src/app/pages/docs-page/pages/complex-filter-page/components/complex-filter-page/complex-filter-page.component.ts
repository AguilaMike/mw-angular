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
          labelPlaceholder: 'any',
          valuePlaceholder: 'Term',
          hint: 'Filter Data by: "Term"',
        },
      },
      {
        id: 'second',
        defaultValue: '',
        component: MwComplexFilterMaterialElementTextComponent,
        data: {
          label: 'Two',
          labelPlaceholder: 'any',
          valuePlaceholder: 'Two',
        },
      },
      {
        id: 'third',
        defaultValue: '',
        component: MwComplexFilterMaterialElementTextComponent,
        data: {
          label: 'Three',
          labelPlaceholder: 'any',
          valuePlaceholder: 'Three',
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
          labelPlaceholder: 'any',
          valuePlaceholder: 'Term',
        },
      },
      {
        id: 'dynamic-fifth',
        defaultValue: '',
        component: MwComplexFilterMaterialElementTextComponent,
        data: {
          label: 'Five',
          labelPlaceholder: 'any',
          valuePlaceholder: 'Term',
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
