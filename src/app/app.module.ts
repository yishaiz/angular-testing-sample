import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';

import { BannerExternalTemplateComponent } from './banner-external-template/banner-external-template.component';
import { AboutComponent }   from './about/about.component';
import { BannerComponent }  from './banner/banner.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TwainComponent } from './shared/twain/twain.component';

import {
  HeroService,
  UserService
}      from './model';

import { TwainService }     from './shared/twain.service';

import { DashboardModule }  from './dashboard/dashboard.module';
import { SharedModule }     from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BannerComponent,
    BannerExternalTemplateComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    HeroService,
    TwainService,
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
