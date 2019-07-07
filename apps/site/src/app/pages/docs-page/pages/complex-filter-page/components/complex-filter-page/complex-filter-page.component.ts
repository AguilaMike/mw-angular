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
      },
      {
        id: 'second',
        defaultValue: '',
        component: MwMaterialComplexFilterElementTextComponent,
      },
      {
        id: 'third',
        defaultValue: '',
        component: MwMaterialComplexFilterElementTextComponent,
      },
    ],
    dynamicFilters: [
      {
        id: 'dynamic-fourth',
        defaultValue: '',
        component: MwMaterialComplexFilterElementTextComponent,
      },
      {
        id: 'dynamic-fifth',
        defaultValue: '',
        component: MwMaterialComplexFilterElementTextComponent,
      },
    ],
    virtualFilters: [
      {
        id: 'virtual-sixth',
        source: timer(0, 10000),
      },
    ],
  };
}
