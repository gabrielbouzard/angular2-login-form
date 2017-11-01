import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../../common/headers';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  authenticated: string;

  constructor(public router: Router, public http: Http, private loginService: LoginService) {}
  ngOnInit() {
    this.loginService.currentEmail.subscribe(email => this.email = email);
    this.loginService.currentPassword.subscribe(password => this.password = password);
    this.loginService.currentAuth.subscribe(authenticated => this.authenticated = authenticated);
  }

  login(email: string, password: string) {
    this.loginService.changeEmail(email);
    this.loginService.changePassword(password);
    this.loginService.authenticate();
  }

  signup(event) {
    event.preventDefault();
    this.router.navigate(['signup']);
  }

}
