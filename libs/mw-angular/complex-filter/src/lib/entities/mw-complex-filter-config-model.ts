import { MwComplexFilterComponentModel } from './mw-complex-filter-component-model';
import { MwComplexFilterVirtualComponentModel } from './mw-complex-filter-virtual-component-model';

export interface MwComplexFilterConfigModel {
  defaultFilters: MwComplexFilterComponentModel[];
  dynamicFilters?: MwComplexFilterComponentModel[];
  virtualFilters?: MwComplexFilterVirtualComponentModel[];
}
