import { NgModule } from '@angular/core';
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ToastComponent } from './service/toast/toast.component';
import { BootstrapModule } from './module/bootstrap.module';
import { SharedModule } from '../shared/shared.module';


const components=[
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  LayoutComponent,
  ToastComponent,
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterModule,
    BootstrapModule,
    SharedModule
  ],
  exports:components
})
export class CoreModule { }
