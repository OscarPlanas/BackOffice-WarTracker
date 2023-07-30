export class User {
    _id?:string;
    name: string;
	username: string;
	password: string;
	date: string;
	email: string;
    isAdmin: boolean;
    imageUrl: string;
    backgroundImageUrl: string;
    about: string;
    meetingsFollowed?: [];
    blogsLiked?: [];
    following?: [];
    followers?: [];
    constructor(id: string, name: string, username: string, password: string, date: string, email: string, isAdmin: boolean, imageUrl: string, backgroundImageUrl: string, about: string, meetingsFollowed: [], blogsLiked: [], following: [], followers: []){
        this._id=id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.date = date;
        this.isAdmin = isAdmin;
        this.email = email;
        this.imageUrl = imageUrl;
        this.backgroundImageUrl = backgroundImageUrl;
        this.about = about;
        this.meetingsFollowed = meetingsFollowed;
        this.blogsLiked = blogsLiked;
        this.following = following;
        this.followers = followers;
    }
}