import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListTwoComponent } from './list-two.component';

const routes: Routes = [
  {
    path: '',
    component: ListTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListTwoRoutingModule { }
