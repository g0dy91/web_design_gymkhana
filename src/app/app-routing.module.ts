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
        path: 'archives',
        component: ArchivesComponent,
      },
      {
        path: 'office-bearers',
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
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
