import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { BootstrapModule } from '../core/module/bootstrap.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HexagonComponent } from './hexagon/hexagon.component';
import { TestCouncilComponent } from './test-council/test-council.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const components=[
  DashboardComponent,
  HexagonComponent,
  TestCouncilComponent,
  HeaderComponent,
  FooterComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterModule,
    BootstrapModule,
    SharedModule,
    FormsModule
  ],
  exports:components
})
export class FeaturesModule { }
