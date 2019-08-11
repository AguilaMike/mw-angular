import { Observable } from 'rxjs';
import { MwComplexFilterDataModel } from './mw-complex-filter-data-model';

export interface MwComplexFilterCommonComponentModel {
  component: any;
  data?: MwComplexFilterDataModel;
}

export interface MwComplexFilterComponentModel extends MwComplexFilterCommonComponentModel {
  id: string;
  label: string;
  defaultValue: any;
}

export interface MwComplexFilterVirtualComponentModel {
  id: string;
  control: Observable<any>;
}
