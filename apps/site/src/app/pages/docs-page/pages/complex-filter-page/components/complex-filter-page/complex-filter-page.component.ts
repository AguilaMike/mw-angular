import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MwComplexFilterConfigModel } from '@mw-angular/complex-filter';

@Component({
  selector: 'app-complex-filter-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './complex-filter-page.component.html',
  styleUrls: ['./complex-filter-page.component.scss'],
})
export class ComplexFilterPageComponent {
  complexFilterConfig: MwComplexFilterConfigModel = {
    defaultFilters: [],
    dynamicFilters: [],
  };
}
