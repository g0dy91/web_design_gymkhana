import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';
import { LayoutComponent } from './core/layout/layout.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { StudentsPaymentsComponent } from './features/students-payments/students-payments.component';
import { TeachersInfoComponent } from './features/teachers-info/teachers-info.component';
import { ReportsComponent } from './features/reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LayoutComponent,
    DashboardComponent,
    StudentsPaymentsComponent,
    TeachersInfoComponent,
    ReportsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
