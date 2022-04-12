import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { NgxUiLoaderHttpConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderHttpConfig = {
};


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
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AppModule { }
