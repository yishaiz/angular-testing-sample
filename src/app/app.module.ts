import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { BannerExternalTemplateComponent } from './banner-external-template/banner-external-template.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserService } from "./model/user.service";

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    BannerExternalTemplateComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
