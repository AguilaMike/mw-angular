import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MwComplexFilterMaterialDeleteButtonComponent } from './components/mw-complex-filter-material-delete-button/mw-complex-filter-material-delete-button.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  declarations: [MwComplexFilterMaterialDeleteButtonComponent],
  entryComponents: [MwComplexFilterMaterialDeleteButtonComponent],
})
export class MwComplexFilterMaterialDeleteButtonModule {}
