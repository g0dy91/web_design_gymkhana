import { NgModule } from '@angular/core';
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { BootstrapModule } from './module/bootstrap.module';
import { SharedModule } from '../shared/shared.module';
import { ToastsContainer } from './service/toast/toasts-container.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'


const components=[
  ToastsContainer,
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterModule,
    BootstrapModule,
    SharedModule,
    FontAwesomeModule
  ],
  exports:components
})
export class CoreModule { }
