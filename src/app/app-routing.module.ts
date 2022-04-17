import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicCouncilComponent } from './features/academic-council/academic-council.component';
import { MessCouncilComponent } from './features/mess-council/mess-council.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LayoutComponent } from './features/layout/layout.component';
import { TestCouncilComponent } from './features/test-council/test-council.component';
import { TransperancyComponent } from './features/transperancy/transperancy.component';
import { MediaCouncilComponent } from './features/media-council/media-council.component';
import { ArchivesComponent } from './features/archives/archives.component';
import { OfficeBearersComponent } from './features/office-bearers/office-bearers.component';
import { GalleryComponent } from './features/gallery/gallery.component';
import { GeneralCouncilComponent } from './features/general-council/general-council.component';
import { EventsComponent } from './features/events/events.component';
import { CouncilsComponent } from './features/councils/councils.component';
import { OfficeBearers2021Component } from './features/office-bearers/office-bearers2021/office-bearers2021.component';
import { OfficeBearers2020Component } from './features/office-bearers/office-bearers2020/office-bearers2020.component';
import { OfficeBearers2019Component } from './features/office-bearers/office-bearers2019/office-bearers2019.component';
import { OfficeBearers2018Component } from './features/office-bearers/office-bearers2018/office-bearers2018.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path:'home',
        component:DashboardComponent
      },
      {
        path: 'test-council',
        component: TestCouncilComponent,
      },
      {
        path:'transperancy',
        component:TransperancyComponent
      },
      {
        path: 'academic-council',
        component: AcademicCouncilComponent,
      },
      {
        path: 'mess-council',
        component: MessCouncilComponent,
      },
      {
        path: 'media-council',
        component: MediaCouncilComponent,
      },
      {
        path: 'more',
        component: ArchivesComponent,
      },
      {
        path: 'officebearers',
        component: OfficeBearersComponent,
      },
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path:'general-council',
        component: GeneralCouncilComponent,
      },
      {
        path:'events',
        component: EventsComponent,
      },
      {
        path:'councils',
        component: CouncilsComponent,
      },
      {
        path:'officebearers2021',
        component: OfficeBearers2021Component,
      },
      {
        path:'officebearers2020',
        component: OfficeBearers2020Component,
      },
      {
        path:'officebearers2019',
        component: OfficeBearers2019Component,
      },
      {
        path:'officebearers2018',
        component: OfficeBearers2018Component,
      },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled',useHash:true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
