import { Injectable, OnInit } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate, OnInit {

	authenticated: string;

	constructor(private loginService: LoginService, private router: Router) {}

	ngOnInit() {
		this.loginService.currentAuth.subscribe(authenticated => this.authenticated = authenticated);
		// this.authenticated = 'false';
	}
  
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		
		if (this.checkIfLoggedIn() == 'true') {
			//  || this.authenticated == 'true') {
			return true;
		} else {
			return false;
		}
	}

	// canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
	// 	if (this.checkIfLoggedIn() == 'true') {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }

	private checkIfLoggedIn() {
		// console.log(this.loginService.checkAuth());
		return this.loginService.checkAuth();
	}
}
