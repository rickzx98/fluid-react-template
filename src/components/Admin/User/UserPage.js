import { CrudPage, getLabel } from "./imports";
import { FormSpecs, TableColumns } from "./api/";

import { PAGE_NAME } from "./constants";
export const UserPage = CrudPage({
	pageName: PAGE_NAME,
	FormSpecs,
	TableColumns,
	page: {
		banner: "./home-banner.jpg",
		label: getLabel("LABEL_USERS"),
		icon: "user"
	}
});