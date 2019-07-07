import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MwMaterialComplexFilterElementLabelModule } from '../mw-material-complex-filter-element-label/mw-material-complex-filter-element-label.module';
import { MwMaterialComplexFilterElementOverlayModule } from '../mw-material-complex-filter-element-overlay/mw-material-complex-filter-element-overlay.module';
import { MwMaterialComplexFilterElementTextComponent } from './components/mw-material-complex-filter-element-text/mw-material-complex-filter-element-text.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    MwMaterialComplexFilterElementLabelModule,
    MwMaterialComplexFilterElementOverlayModule,
  ],
  declarations: [MwMaterialComplexFilterElementTextComponent],
  entryComponents: [MwMaterialComplexFilterElementTextComponent],
})
export class MwMaterialComplexFilterElementTextModule {}
