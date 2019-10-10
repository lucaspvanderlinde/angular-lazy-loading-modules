import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListTreeRoutingModule } from './list-tree-routing.module';
import { ListTreeComponent } from './list-tree.component';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ListTreeRoutingModule,
    SharedModule
  ],
  declarations: [
    ListTreeComponent
  ],
  providers: [
  ]
})
export class ListTreeModule { }
