import { MwComplexFilterComponentModel } from './mw-complex-filter-component-model';
import { MwComplexFilterVirtualComponentModel } from './mw-complex-filter-virtual-component-model';

export interface MwComplexFilterConfigModel {
  resetButtonComponent: any;
  deleteButtonComponent: any;
  fixedFilters: MwComplexFilterComponentModel[];
  optionalFilters: MwComplexFilterComponentModel[];
  virtualFilters?: MwComplexFilterVirtualComponentModel[];
}
