import { Hello2, getLabel } from "../imports";
export default () => [{
	label : getLabel("LABEL_TITLE"),
	field : Hello2.HELLO,
	primaryKey : false,
	skipRender : false,
	data: {
}},
{
	label : getLabel("LABEL_TITLE"),
	field : Hello2.HI,
	primaryKey : false,
	skipRender : false,
	data: {
}}];