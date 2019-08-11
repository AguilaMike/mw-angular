import { NgModule } from '@angular/core';
import { MwComplexFilterMaterialDeleteButtonModule } from './mw-complex-filter-material-delete-button/mw-complex-filter-material-delete-button.module';
import { MwComplexFilterMaterialElementTextModule } from './mw-complex-filter-material-element-text/mw-complex-filter-material-element-text.module';
import { MwComplexFilterMaterialFiltersSelectorModule } from './mw-complex-filter-material-filters-selector/mw-complex-filter-material-filters-selector.module';
import { MwComplexFilterMaterialResetButtonModule } from './mw-complex-filter-material-reset-button/mw-complex-filter-material-reset-button.module';

@NgModule({
  exports: [
    MwComplexFilterMaterialFiltersSelectorModule,
    MwComplexFilterMaterialResetButtonModule,
    MwComplexFilterMaterialDeleteButtonModule,
    MwComplexFilterMaterialElementTextModule,
  ],
})
export class MwComplexFilterMaterialElementsModule {}
