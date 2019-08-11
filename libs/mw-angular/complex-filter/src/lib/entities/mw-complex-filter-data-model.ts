import { Observable } from 'rxjs';

export interface MwComplexFilterDataModel {
  [property: string]: any;
}

export interface MwComplexFilterFiltersSelectorDataModel {
  labelPlaceholder: string;
  filters$: Observable<
    Array<{
      id: string;
      label: string;
      selected: boolean;
    }>
  >;
}

export interface MwComplexFilterDeleteButtonDataModel {
  id: string;
}
