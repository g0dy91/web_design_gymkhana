import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BootstrapModule } from './core/module/bootstrap.module';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';
import { AcademicCouncilComponent } from './features/academic-council/academic-council.component';
import { BtechComponent } from './features/academic-council/btech/btech.component';
import { MtechComponent } from './features/academic-council/mtech/mtech.component';
import { PhdComponent } from './features/academic-council/phd/phd.component';

@NgModule({
  declarations: [
    AppComponent,AcademicCouncilComponent,BtechComponent,MtechComponent,PhdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FeaturesModule,
    SharedModule,
    FormsModule,
    BootstrapModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
