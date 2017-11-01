import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './navbar/home/home.component';
import { DashboardComponent } from './navbar/dashboard/dashboard.component';
import { SettingsComponent } from './navbar/settings/settings.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'app';
}
