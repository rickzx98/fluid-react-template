import { UserPage } from "../components/Admin/User";
export default {
	root: "Admin",
	name: "user",
	pages: [
		{ icon: "user", path: "/user", component: UserPage, name: "user", label: "LABEL_USER" },
		{ path: "/user/new", component: UserPage, skipLink: true },
		{ path: "/user/view/:id", component: UserPage, skipLink: true }]
};