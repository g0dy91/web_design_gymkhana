import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { LoginComponent } from './core/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ReportsComponent } from './features/reports/reports.component';
import { StudentsPaymentsComponent } from './features/students-payments/students-payments.component';
import { TeachersInfoComponent } from './features/teachers-info/teachers-info.component';

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
    },
    {
      path:'reports',
      component:ReportsComponent
    },
    {
      path:'students-payment',
      component:StudentsPaymentsComponent
    },
    {
      path:'teachers-info',
      component:TeachersInfoComponent
    }
  ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
