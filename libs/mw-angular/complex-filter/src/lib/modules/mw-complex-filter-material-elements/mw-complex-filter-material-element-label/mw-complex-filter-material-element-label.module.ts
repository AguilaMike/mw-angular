import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MwComplexFilterMaterialElementLabelComponent } from './components/mw-complex-filter-material-element-label/mw-complex-filter-material-element-label.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  declarations: [MwComplexFilterMaterialElementLabelComponent],
  exports: [MwComplexFilterMaterialElementLabelComponent],
})
export class MwComplexFilterMaterialElementLabelModule {}
