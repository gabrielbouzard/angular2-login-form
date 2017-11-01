export class Message {

	messages: Array<string>;
    messageKeys: ["userProfileImageUrl", "firstName", "lastName", "messageText", "timeStamp"];

    constructor() { 
        this.messages = [
        	"image, Bob, Bompart, 'What a time to be alive..'",
        	"image, Bob, Bompart, 'Worst year since the turn of the century.'",
        	"image Alice Arms 'Is fault of Obama\'s.'",
        	"image Bob Bompart 'Go back to your Russian troll farm Alice!'", 
        ]
    }

}        