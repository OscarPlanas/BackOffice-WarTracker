import { User } from "./User";

export class Meeting {
    _id?: string;
    title?: string;
    imageUrl?: string;
    description?: string;
    organizer?: User;
    date?: string;
    location?: string;
    participants?: User[]; // Declare participants as an array of User
    comments?: any[]; // Assuming comments can be any type of data, you can use "any" here
    registration_fee?: number;

    constructor(
        id: string,
        title: string,
        imageUrl: string,
        description: string,
        organizer: User,
        date: string,
        location: string,
        participants: User[],
        comments: [],
        registration_fee: number
    ) {
        this._id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.organizer = organizer;
        this.date = date;
        this.location = location;
        this.participants = participants;
        this.comments = comments;
        this.registration_fee = registration_fee;
    }
}
