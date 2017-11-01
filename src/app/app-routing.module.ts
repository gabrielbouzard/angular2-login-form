import { HomeComponent } from './navbar/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
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
      },
    {
      path: 'login',
      component: LoginComponent,

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
    RouterModule.forRoot(routes),
  ],
  exports: [
  	RoutingModule,
  ],
  providers: [],
})

export class RoutingModule { }
