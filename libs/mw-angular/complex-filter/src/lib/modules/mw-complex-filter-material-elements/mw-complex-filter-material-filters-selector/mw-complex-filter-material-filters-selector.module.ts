import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MwComplexFilterMaterialFiltersSelectorComponent } from './components/mw-complex-filter-material-filters-selector/mw-complex-filter-material-filters-selector.component';

@NgModule({
  imports: [CommonModule, MatFormFieldModule, MatSelectModule],
  declarations: [MwComplexFilterMaterialFiltersSelectorComponent],
  entryComponents: [MwComplexFilterMaterialFiltersSelectorComponent],
})
export class MwComplexFilterMaterialFiltersSelectorModule {}
