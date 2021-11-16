import { NgModule } from '@angular/core';
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { BootstrapModule } from './module/bootstrap.module';
import { SharedModule } from '../shared/shared.module';
import { ToastsContainer } from './service/toast/toasts-container.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'


const components=[
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  LayoutComponent,
  ToastsContainer,
  LoginComponent
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
