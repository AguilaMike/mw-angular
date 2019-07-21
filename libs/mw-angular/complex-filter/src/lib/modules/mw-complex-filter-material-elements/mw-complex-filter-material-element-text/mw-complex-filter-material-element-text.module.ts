import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MwComplexFilterMaterialElementLabelModule } from '../mw-complex-filter-material-element-label/mw-complex-filter-material-element-label.module';
import { MwComplexFilterMaterialElementOverlayModule } from '../mw-complex-filter-material-element-overlay/mw-complex-filter-material-element-overlay.module';
import { MwComplexFilterMaterialElementTextLabelComponent } from './components/mw-complex-filter-material-element-text-label/mw-complex-filter-material-element-text-label.component';
import { MwComplexFilterMaterialElementTextOverlayComponent } from './components/mw-complex-filter-material-element-text-overlay/mw-complex-filter-material-element-text-overlay.component';
import { MwComplexFilterMaterialElementTextComponent } from './components/mw-complex-filter-material-element-text/mw-complex-filter-material-element-text.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MwComplexFilterMaterialElementLabelModule,
    MwComplexFilterMaterialElementOverlayModule,
  ],
  declarations: [
    MwComplexFilterMaterialElementTextComponent,
    MwComplexFilterMaterialElementTextLabelComponent,
    MwComplexFilterMaterialElementTextOverlayComponent,
  ],
  entryComponents: [MwComplexFilterMaterialElementTextComponent],
})
export class MwComplexFilterMaterialElementTextModule {}
