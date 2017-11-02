import { HomeComponent } from './navbar/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './login.guard';
import { SettingsComponent } from './navbar/settings/settings.component';
import { DashboardComponent } from './navbar/dashboard/dashboard.component';
import { LoginComponent } from './navbar/login/login.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    children: [
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
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [LoginGuard],
      }
    ],
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
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
  	RouterModule,
  ],
  providers: [],
})

export class RoutingModule { }
