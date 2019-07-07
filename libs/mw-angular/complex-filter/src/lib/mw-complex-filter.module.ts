import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MwComplexFilterInnerComponent } from './components/mw-complex-filter-inner/mw-complex-filter-inner.component';
import { MwComplexFilterComponent } from './mw-complex-filter.component';

@NgModule({
  imports: [CommonModule, PortalModule, ReactiveFormsModule],
  declarations: [MwComplexFilterComponent, MwComplexFilterInnerComponent],
  exports: [MwComplexFilterComponent],
})
export class MwComplexFilterModule {}
