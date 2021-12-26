import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicCouncilComponent } from './features/academic-council/academic-council.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LayoutComponent } from './features/layout/layout.component';
import { TestCouncilComponent } from './features/test-council/test-council.component';

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
        path: 'academic-council',
        component: AcademicCouncilComponent,
      },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
