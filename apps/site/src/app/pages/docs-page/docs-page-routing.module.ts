import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsPageContainerComponent } from './docs-page-container.component';

const routes: Routes = [
  {
    path: '',
    component: DocsPageContainerComponent,
  },
  {
    path: 'complex-filter',
    loadChildren: () =>
      import('./pages/complex-filter-page/complex-filter-page.module').then((m) => m.ComplexFilterPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class DocsPageRoutingModule {}
