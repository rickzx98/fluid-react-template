import { Hello2Page } from "../components/Forms/Hello2";
export default { 
name:"hello2",
pages:[
	{ path: "/hello2", component: Hello2Page },
	{path:"/hello2/new",component: Hello2Page },
	{ path:"/hello2/view/:id", component: Hello2Page}] };