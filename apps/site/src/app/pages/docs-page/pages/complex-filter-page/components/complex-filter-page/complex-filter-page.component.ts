import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  MwComplexFilterConfigModel,
  MwComplexFilterMaterialDeleteButtonComponent,
  MwComplexFilterMaterialElementTextComponent,
  MwComplexFilterMaterialFiltersSelectorComponent,
  MwComplexFilterMaterialResetButtonComponent,
} from '@mw-angular/complex-filter';
import { timer } from 'rxjs';

@Component({
  selector: 'app-complex-filter-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './complex-filter-page.component.html',
  styleUrls: ['./complex-filter-page.component.scss'],
})
export class ComplexFilterPageComponent {
  complexFilterConfig: MwComplexFilterConfigModel = {
    filtersSelector: {
      component: MwComplexFilterMaterialFiltersSelectorComponent,
      data: {
        labelPlaceholder: 'Add more filters',
      },
    },
    resetButton: {
      component: MwComplexFilterMaterialResetButtonComponent,
    },
    deleteButton: {
      component: MwComplexFilterMaterialDeleteButtonComponent,
    },
    fixedFilters: [
      {
        id: 'first',
        label: 'One',
        defaultValue: '',
        component: MwComplexFilterMaterialElementTextComponent,
        data: {
          labelPlaceholder: 'any',
          valuePlaceholder: 'Term',
          hint: 'Filter Data by: "Term"',
        },
      },
      {
        id: 'second',
        label: 'Two',
        defaultValue: '',
        component: MwComplexFilterMaterialElementTextComponent,
        data: {
          labelPlaceholder: 'any',
          valuePlaceholder: 'Two',
        },
      },
      {
        id: 'third',
        label: 'Three',
        defaultValue: '',
        component: MwComplexFilterMaterialElementTextComponent,
        data: {
          labelPlaceholder: 'any',
          valuePlaceholder: 'Three',
        },
      },
    ],
    optionalFilters: [
      {
        id: 'dynamic-fourth',
        label: 'Four',
        defaultValue: '',
        component: MwComplexFilterMaterialElementTextComponent,
        data: {
          labelPlaceholder: 'any',
          valuePlaceholder: 'Term',
        },
      },
      {
        id: 'dynamic-fifth',
        label: 'Five',
        defaultValue: '',
        component: MwComplexFilterMaterialElementTextComponent,
        data: {
          labelPlaceholder: 'any',
          valuePlaceholder: 'Term',
        },
      },
    ],
    virtualFilters: [
      {
        id: 'virtual-sixth',
        control: timer(1000),
      },
    ],
  };

  onChangeEvent(value: any) {
    console.log(value);
  }
}
