import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { BootstrapModule } from '../core/module/bootstrap.module';
import { SharedModule } from '../shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';

const components=[
  DashboardComponent,
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterModule,
    BootstrapModule,
    SharedModule,
    AgGridModule.withComponents([]),
    FormsModule
  ],
  exports:components
})
export class FeaturesModule { }
