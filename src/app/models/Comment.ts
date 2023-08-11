import { User } from "./User";

export class Comment {
    _id?: string;
    content?: string;
    owner?: User;
    likes?: [];
    dislikes?: [];
    replies?: Comment[];

    constructor(id: string, content: string, owner: User, likes: [], dislikes: [], replies: Comment[]) {
        this._id = id;
        this.content = content;
        this.owner = owner;
        this.likes = likes;
        this.dislikes = dislikes;
        this.replies = replies;
    }
}