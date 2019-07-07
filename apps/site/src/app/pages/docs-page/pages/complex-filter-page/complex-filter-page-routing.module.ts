import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplexFilterPageContainerComponent } from './complex-filter-page-container.component';

const routes: Routes = [
  {
    path: '',
    component: ComplexFilterPageContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ComplexFilterPageRoutingModule {}
