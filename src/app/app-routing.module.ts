import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { LoginComponent } from './core/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

const routes:Routes=[
  {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full',
  },
  {
      path: 'login',
      component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
    {      
      path:'dashboard',
      component:DashboardComponent,
    }
  ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }