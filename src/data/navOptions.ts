import { environment } from "src/environments/environment";

const navOptions = [
    {
        name: 'Home',
        path: '/',
        icon: '../assets/home.png',
        exact: true,
		auth: true
    },
    {
        name: 'User',
        path: '/user-select',
        icon: '../assets/User.png',
        exact: true,
        auth: true
    },
    {
        name: 'Blog',
        path: '/blog-select',
        icon: '../assets/blog.png',
        exact: true,
        auth: unAuth()

    },
    {
        name: 'Meeting',
        path: '/meeting-select',
        icon: '../assets/meeting.png',
        exact: true,
        auth: unAuth()
    },
    {
        name: 'Comment',
        path: '/comment-screen',
        icon: '../assets/comments.png',
        exact: true,
        auth: unAuth()
    },
    {
        name: 'Report',
        path: '/report-screen',
        icon: '../assets/report.png',
        exact: true,
        auth: unAuth()
    },
    {
        name: 'Log in',
        path: '/login',
        icon: '../assets/login.png',
        exact: true,
		auth: unAuth()
    },
    

];

function unAuth(){
	if(environment.auth === null){
		return true;
	}else{
		return false;
	}
}
export default navOptions;