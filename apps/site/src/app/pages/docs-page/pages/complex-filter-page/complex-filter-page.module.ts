import { NgModule } from '@angular/core';
import { MwComplexFilterModule } from '@mw-angular/complex-filter';
import { SharedModule } from '../../../../modules/shared/shared.module';
import { DocsLayoutModule } from '../../modules/docs-layout/docs-layout.module';
import { ComplexFilterPageContainerComponent } from './complex-filter-page-container.component';
import { ComplexFilterPageRoutingModule } from './complex-filter-page-routing.module';
import { ComplexFilterPageComponent } from './components/complex-filter-page/complex-filter-page.component';

@NgModule({
  imports: [SharedModule, ComplexFilterPageRoutingModule, DocsLayoutModule, MwComplexFilterModule],
  declarations: [ComplexFilterPageContainerComponent, ComplexFilterPageComponent],
})
export class ComplexFilterPageModule {}
