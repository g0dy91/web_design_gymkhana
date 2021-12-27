import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LayoutComponent } from './features/layout/layout.component';
import { TestCouncilComponent } from './features/test-council/test-council.component';
import { TransperancyComponent } from './features/transperancy/transperancy.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path: 'test-council',
        component: TestCouncilComponent,
      },
      {
        path:'transperancy',
        component:TransperancyComponent
      }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
