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
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    AppComponent
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
    LazyLoadImageModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
