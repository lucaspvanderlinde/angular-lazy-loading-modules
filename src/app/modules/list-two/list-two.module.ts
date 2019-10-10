import { ListTwoComponent } from './list-two.component';
import { ListTwoRoutingModule } from './list-two-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from './../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ListTwoRoutingModule,
    SharedModule
  ],
  declarations: [
    ListTwoComponent
  ],
  providers: [
  ]
})
export class ListTwoModule { }
