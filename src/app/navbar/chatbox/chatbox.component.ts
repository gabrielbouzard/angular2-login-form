import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})

// you would expect that a chatbox component accepts an array of data/messages and that the template iterates over the data.messages array.

export class ChatboxComponent implements OnInit {

	messages: Array<string>;
	conversation: Array<string>;

	constructor(private router: Router) { 
		this.messages = [
			"START", 
			"3..2..1..",
			"SETTINGS",
			"this app is not cool enough to have settings",
			"COW",
			"MOOOOOOOOOOOOOOOOOOOOO",
		];
		this.conversation = [];
	}	

	ngOnInit() {
	}

	onClick(msg: string) {
		for (var i=0; i < (this.messages.length - 1); i++) {
			if (this.messages[i] == msg) {
				this.conversation.push(this.messages[i+1]);
			}
		}
		this.router.navigateByUrl('chatbox');
	}

}
