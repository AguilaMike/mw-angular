import { NgModule } from '@angular/core';
import { BaseLayoutModule } from '../../../../modules/base-layout/base-layout.module';
import { SharedModule } from '../../../../modules/shared/shared.module';
import { DocsLayoutComponent } from './components/docs-layout/docs-layout.component';
import { DocsLayoutContainerComponent } from './docs-layout-container.component';

@NgModule({
  imports: [SharedModule, BaseLayoutModule],
  declarations: [DocsLayoutContainerComponent, DocsLayoutComponent],
  exports: [DocsLayoutContainerComponent],
})
export class DocsLayoutModule {}
