import { Observable } from 'rxjs';
import { MwComplexFilterSelectorModel } from './mw-complex-filter-selector-model';

export interface MwComplexFilterDataModel {
  [property: string]: any;
}

export interface MwComplexFilterFiltersSelectorDataModel {
  labelPlaceholder: string;
  filters$: Observable<MwComplexFilterSelectorModel[]>;
}

export interface MwComplexFilterDeleteButtonDataModel {
  id: string;
}
