import { MwComplexFilterComponentModel } from './mw-complex-filter-component-model';

export interface MwComplexFilterConfigModel {
  defaultFilters: MwComplexFilterComponentModel[];
  dynamicFilters?: MwComplexFilterComponentModel[];
}
