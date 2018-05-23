import { CrudPage, getLabel } from "./imports";
import { FormSpecs, TableColumns } from "./api/";
import { PAGE_NAME } from  "./constants";
export const HelloPage = CrudPage({
	pageName: PAGE_NAME,
	FormSpecs,
	TableColumns,
	page: {
		banner: "/library-header.jpg",
		label: getLabel("LABEL_TITLE"),
		icon: undefined }
		});