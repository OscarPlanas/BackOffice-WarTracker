export class Report {
    _id?:String;
    user_reported: String;
	reason: String;
	owner: String;
	date: Date;
    constructor(id: String, reason: String, user_reported: String, owner: String, date: Date){
        this._id=id;
        this.user_reported = user_reported;
        this.reason = reason;
        this.date = date;
        this.owner = owner;
    }
}