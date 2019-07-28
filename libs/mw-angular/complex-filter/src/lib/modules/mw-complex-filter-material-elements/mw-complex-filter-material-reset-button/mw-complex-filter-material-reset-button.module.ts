import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MwComplexFilterMaterialResetButtonComponent } from './components/mw-complex-filter-material-reset-button/mw-complex-filter-material-reset-button.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  declarations: [MwComplexFilterMaterialResetButtonComponent],
  entryComponents: [MwComplexFilterMaterialResetButtonComponent],
})
export class MwComplexFilterMaterialResetButtonModule {}
