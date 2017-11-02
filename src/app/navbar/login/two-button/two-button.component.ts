import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { LoginService } from '../../../login.service';

@Component({
  selector: 'app-two-button',
  templateUrl: './two-button.component.html',
  styleUrls: ['./two-button.component.css']
})

export class TwoButtonComponent {

	@Input() buttonOneText: string;
	@Input() buttonTwoText: string;
	@Output() buttonOneClicked = new EventEmitter<string>();

	constructor(private router: Router) {}

	public onClickButtonOne = (): void => {
		this.buttonOneClicked.emit('login'); 
	}

	public onClickButtonTwo() {
		// this.router.navigateByUrl('login');
		console.log('onClickButtonTwo');
	}

}
