import { MwComplexFilterComponentDataModel } from './mw-complex-filter-component-data-model';

export interface MwComplexFilterComponentModel {
  id: string;
  defaultValue: any;
  component: any;
  data?: MwComplexFilterComponentDataModel;
}
