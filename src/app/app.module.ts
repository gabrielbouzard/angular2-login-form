import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions, XHRBackend, Http } from "@angular/http";
import { AppRoutingModule } from './app.routing.module';

import { LoginGuard } from './login.guard';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './navbar/login/login.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { TwoButtonComponent } from './navbar/login/two-button/two-button.component';
import { HomeComponent } from './navbar/home/home.component';
import { SettingsComponent } from './navbar/settings/settings.component';
import { DashboardComponent } from './navbar/dashboard/dashboard.component';

import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ChatboxComponent,
    TwoButtonComponent,
    HomeComponent,
    SettingsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [LoginService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
