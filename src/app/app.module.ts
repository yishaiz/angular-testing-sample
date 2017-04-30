import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { BannerExternalTemplateComponent } from './banner-external-template/banner-external-template.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserService } from "./model/user.service";
/*
import { TwainComponent } from './shared/twain.component';
import { TwainService } from "./shared/twain.service";
*/


import { TwainComponent } from './shared/twain/twain.component';
import { TwainService } from "./shared/twain/twain.service";

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    BannerExternalTemplateComponent,
    WelcomeComponent
    // TwainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UserService,
    TwainService//todo: check if must
  ],
  //
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
