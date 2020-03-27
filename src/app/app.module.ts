import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './modules/feature/home/home.module';
import { AngularMaterialModule } from './modules/shared/angular-material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CanDeactivateService } from './services/guards/can-deactivate/can-deactivate.service';
import { TokenInterceptorService } from './services/interceptor/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    HomeModule
  ],
  providers: [
    CanDeactivateService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
