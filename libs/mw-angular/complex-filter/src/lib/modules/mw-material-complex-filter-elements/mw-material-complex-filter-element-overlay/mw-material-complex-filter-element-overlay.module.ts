import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MwMaterialComplexFilterElementOverlayComponent } from './components/mw-material-complex-filter-element-overlay/mw-material-complex-filter-element-overlay.component';

@NgModule({
  imports: [CommonModule, OverlayModule],
  declarations: [MwMaterialComplexFilterElementOverlayComponent],
  exports: [MwMaterialComplexFilterElementOverlayComponent],
})
export class MwMaterialComplexFilterElementOverlayModule {}
