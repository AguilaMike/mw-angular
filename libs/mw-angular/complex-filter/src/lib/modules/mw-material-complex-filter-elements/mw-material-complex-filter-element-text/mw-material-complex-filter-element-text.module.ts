import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MwMaterialComplexFilterElementLabelModule } from '../mw-material-complex-filter-element-label/mw-material-complex-filter-element-label.module';
import { MwMaterialComplexFilterElementOverlayModule } from '../mw-material-complex-filter-element-overlay/mw-material-complex-filter-element-overlay.module';
import { MwMaterialComplexFilterElementTextLabelComponent } from './components/mw-material-complex-filter-element-text-label/mw-material-complex-filter-element-text-label.component';
import { MwMaterialComplexFilterElementTextOverlayComponent } from './components/mw-material-complex-filter-element-text-overlay/mw-material-complex-filter-element-text-overlay.component';
import { MwMaterialComplexFilterElementTextComponent } from './components/mw-material-complex-filter-element-text/mw-material-complex-filter-element-text.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MwMaterialComplexFilterElementLabelModule,
    MwMaterialComplexFilterElementOverlayModule,
  ],
  declarations: [
    MwMaterialComplexFilterElementTextComponent,
    MwMaterialComplexFilterElementTextLabelComponent,
    MwMaterialComplexFilterElementTextOverlayComponent,
  ],
  entryComponents: [MwMaterialComplexFilterElementTextComponent],
})
export class MwMaterialComplexFilterElementTextModule {}
