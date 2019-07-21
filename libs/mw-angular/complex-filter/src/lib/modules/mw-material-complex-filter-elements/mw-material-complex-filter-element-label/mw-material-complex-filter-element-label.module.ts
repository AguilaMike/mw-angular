import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MwMaterialComplexFilterElementLabelComponent } from './components/mw-material-complex-filter-element-label/mw-material-complex-filter-element-label.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  declarations: [MwMaterialComplexFilterElementLabelComponent],
  exports: [MwMaterialComplexFilterElementLabelComponent],
})
export class MwMaterialComplexFilterElementLabelModule {}
