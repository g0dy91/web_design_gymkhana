import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { HexagonComponent } from './features/hexagon/hexagon.component';
import { LayoutComponent } from './features/layout/layout.component';
import { TestCouncilComponent } from './features/test-council/test-council.component';

// const routes:Routes=[
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//   { path: 'dashboard', component: DashboardComponent },
//   { path: 'test-council', component: TestCouncilComponent },
// ]
const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  // },
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
    ]
  },
  { path: '**', redirectTo: '/' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
