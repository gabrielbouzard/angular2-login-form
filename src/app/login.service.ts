import { Injectable } from '@angular/core';
import { User } from './user';
import { Profile } from './profile.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

	private authenticated = new BehaviorSubject<string>("false");
	private email = new BehaviorSubject<string>('                 ');
	private password = new BehaviorSubject<string>('');

	currentAuth = this.authenticated.asObservable();
	currentEmail = this.email.asObservable();
	currentPassword = this.password.asObservable();

	profiles = [
    	{emailAddress: "test", password: "password"},
    	{emailAddress: "bbond@yahoo.com", password: "test2"},
    	{emailAddress: "ccoldstone@yahoo.com", password: "test3"}, 
    	{emailAddress: "ddunnam@yahoo.com", password: "test4"},
	]
	
	constructor(private router: Router) {}

	public checkAuth() {
		return (this.authenticated.getValue());
	}

	public authenticate() {
		var sentinal = false;
		for (let user of this.profiles) {
			// console.log(this.email.getValue() == user.emailAddress.valueOf());
			// console.log(this.password.getValue() == user.password.valueOf());
			if ((this.email.getValue() == user.emailAddress.valueOf()) && (this.password.getValue() == user.password.valueOf())) {
				this.authenticated.next("true");
				this.router.navigateByUrl('home');
			}
		}
	}

	public changeEmail(email: string) {
		this.email.next(email);
	}

	public changePassword(password: string) {
		this.password.next(password);
	}
}
