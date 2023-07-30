import { User } from "./User";

export class Blog {
    _id?: string;
    title?: string;
    description?: string;
    body_text?: string;
    author?: User;
    date?: string;
    imageUrl?: string;
    comments?: [];
    usersLiked?: [];

    constructor(id: string, title: string, description: string, body_text: string, author: User, date: string, imageUrl: string, comments: [], usersLiked: []) {
        this._id = id;
        this.title = title;
        this.description = description;
        this.body_text = body_text;
        this.author = author;
        this.date = date;
        this.imageUrl = imageUrl;
        this.comments = comments;
        this.usersLiked = usersLiked;
    }
}