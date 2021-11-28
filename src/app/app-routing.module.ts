import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

const routes:Routes=[
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
