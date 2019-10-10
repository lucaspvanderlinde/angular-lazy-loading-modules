import { LoginComponent } from './modules/login/login.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: SidebarComponent,
    children: [
      {
        path: 'home',
        loadChildren: './modules/home/home.module#HomeModule'
      },
      {
        path: 'list',
        loadChildren: './modules/list/list.module#ListModule'
      },
      {
        path: 'list-two',
        loadChildren: './modules/list-two/list-two.module#ListTwoModule'
      },
      {
        path: 'list-tree',
        loadChildren: './modules/list-tree/list-tree.module#ListTreeModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
