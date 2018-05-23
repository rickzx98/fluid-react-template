import { HelloPage } from "../components/Forms/Hello";
export default { 
name:"hello",
pages:[
	{ path: "/hello", component: HelloPage },
	{path:"/hello/new",component: HelloPage },
	{ path:"/hello/view/:id", component: HelloPage}] };