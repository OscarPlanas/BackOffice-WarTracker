export class Report {
    _id?:String;
    reported: String;
	reason: String;
	owner: String;
	date: Date;
    type: String;
    constructor(id: String, reason: String, reported: String, owner: String, date: Date, type: String){
        this._id=id;
        this.reported = reported;
        this.reason = reason;
        this.date = date;
        this.owner = owner;
        this.type = type;
    }
}