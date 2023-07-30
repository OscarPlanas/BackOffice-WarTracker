import { User } from "./User";

export class Comment {
    _id?: string;
    content?: string;
    owner?: [];
    likes?: [];
    dislikes?: [];
    replies?: [];

    constructor(id: string, content: string, owner: [], likes: [], dislikes: [], replies: []) {
        this._id = id;
        this.content = content;
        this.owner = owner;
        this.likes = likes;
        this.dislikes = dislikes;
        this.replies = replies;
    }
}