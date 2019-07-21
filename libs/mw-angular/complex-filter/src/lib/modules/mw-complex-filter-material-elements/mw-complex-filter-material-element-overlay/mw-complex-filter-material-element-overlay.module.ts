import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MwComplexFilterMaterialElementOverlayComponent } from './components/mw-complex-filter-material-element-overlay/mw-complex-filter-material-element-overlay.component';

@NgModule({
  imports: [CommonModule, OverlayModule],
  declarations: [MwComplexFilterMaterialElementOverlayComponent],
  exports: [MwComplexFilterMaterialElementOverlayComponent],
})
export class MwComplexFilterMaterialElementOverlayModule {}
