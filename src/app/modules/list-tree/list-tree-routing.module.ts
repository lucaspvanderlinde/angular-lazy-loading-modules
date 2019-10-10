import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListTreeComponent } from './list-tree.component';

const routes: Routes = [
  {
    path: '',
    component: ListTreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListTreeRoutingModule { }
