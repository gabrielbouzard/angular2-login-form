export class Message {

	messages: Array<string>;
    messageKeys: ["userProfileImageUrl", "firstName", "lastName", "messageText", "timeStamp"];

    constructor() { 
        this.messages = [
        	"START",
        	"SETTINGS",
        	"COW"
        ]
    }

}        