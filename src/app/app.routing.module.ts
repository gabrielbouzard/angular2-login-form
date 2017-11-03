import { HomeComponent } from './navbar/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './login.guard';
import { SettingsComponent } from './navbar/settings/settings.component';
import { ChatboxComponent } from './navbar/chatbox/chatbox.component';
import { LoginComponent } from './navbar/login/login.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
      { 
        path:'home', 
        component: HomeComponent,
        canActivate: [LoginGuard],
      },
      {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [LoginGuard],
      },
      {
        path: 'chatbox',
        component: ChatboxComponent,
        canActivate: [LoginGuard],
      },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes, 
      { enableTracing: true }
    ),
  ],
  exports: [
  	RouterModule,
  ],
  providers: [],
})

export class AppRoutingModule { }
