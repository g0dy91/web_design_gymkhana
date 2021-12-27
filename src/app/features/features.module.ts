import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { BootstrapModule } from '../core/module/bootstrap.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HexagonComponent } from './hexagon/hexagon.component';
import { TestCouncilComponent } from './test-council/test-council.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { TransperancyComponent } from './transperancy/transperancy.component';
import { OfficeBearersComponent } from './office-bearers/office-bearers.component';
import { MessCouncilComponent } from './mess-council/mess-council.component';
import { MediaCouncilComponent } from './media-council/media-council.component';
import { ArchivesComponent } from './archives/archives.component';
import { AcademicCouncilComponent } from './academic-council/academic-council.component';

const components=[
  DashboardComponent,
  HexagonComponent,
  TestCouncilComponent,
  LayoutComponent,
  FooterComponent,
  HeaderComponent,
  TransperancyComponent,
  OfficeBearersComponent,
  MessCouncilComponent,
  MediaCouncilComponent,
  ArchivesComponent,
  AcademicCouncilComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterModule,
    BootstrapModule,
    SharedModule,
    FormsModule,
    LazyLoadImageModule,
  ],
  exports:components
})
export class FeaturesModule { }
