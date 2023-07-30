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
        path: '/user-screen',
        icon: '../assets/User.png',
        exact: true,
        auth: true
    },
    {
        name: 'Blog',
        path: '/blog-screen',
        icon: '../assets/blog.png',
        exact: true,
        auth: unAuth()

    },
    {
        name: 'Meeting',
        path: '/meeting-screen',
        icon: '../assets/meeting.png',
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
    {
        name: 'Create Event',
        path: '/create-event',
        icon: '../assets/EventArrow.png',
        exact: true,
        auth: unAuth()
    },
    {
        name: 'Show Events',
        path: '/event-screen',
        icon: '../assets/EventArrow.png',
        exact: true,
        auth: unAuth()
    },
    {
        name: 'User List',
        path: '/userlist',
        icon: '../assets/User.png',
        exact: true,
        auth: unAuth()
    },
    {
        name: 'Create Serie',
        path: '/create-serie',
        icon: '../assets/EventArrow.png',
        exact: true,
        auth: true
    },
    {
        name: 'Show Series',
        path: '/series-list',
        icon: '../assets/EventArrow.png',
        exact: true,
        auth: true
    },
    {
        name: 'Show Reports',
        path: '/reports-list',
        icon: '../assets/EventArrow.png',
        exact: true,
        auth: true
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