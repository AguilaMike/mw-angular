import { MwComplexFilterComponentDataModel } from '../../../../entities/mw-complex-filter-component-data-model';

export interface MwComplexFilterElementTextDataModel extends MwComplexFilterComponentDataModel {
  label: string;
  emptyValuePlaceholder: string;
}
