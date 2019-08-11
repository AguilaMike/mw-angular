import {
  MwComplexFilterCommonComponentModel,
  MwComplexFilterComponentModel,
  MwComplexFilterVirtualComponentModel,
} from './mw-complex-filter-component-model';

export interface MwComplexFilterConfigModel {
  filtersSelector: MwComplexFilterCommonComponentModel;
  resetButton: MwComplexFilterCommonComponentModel;
  deleteButton: MwComplexFilterCommonComponentModel;
  fixedFilters: MwComplexFilterComponentModel[];
  optionalFilters: MwComplexFilterComponentModel[];
  virtualFilters?: MwComplexFilterVirtualComponentModel[];
}
