import { MwComplexFilterComponentDataModel } from '../../../../entities/mw-complex-filter-component-data-model';

export interface MwComplexFilterMaterialElementTextDataModel extends MwComplexFilterComponentDataModel {
  label: string;
  labelPlaceholder: string;
  valuePlaceholder: string;
  hint?: string;
}
