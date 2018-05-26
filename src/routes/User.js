import { UserPage } from "../components/Admin/User";
export default { 
name:"user",
pages:[
	{ path: "/user", component: UserPage },
	{path:"/user/new",component: UserPage },
	{ path:"/user/view/:id", component: UserPage}] };