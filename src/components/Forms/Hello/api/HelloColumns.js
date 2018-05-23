import { Hello, getLabel } from "../imports";
export default [{
	label : getLabel("LABEL_TITLE"),
	field : Hello.HELLO,
	primaryKey : false,
	skipRender : false
},
{
	label : getLabel("LABEL_TITLE"),
	field : Hello.HI,
	primaryKey : false,
	skipRender : false
}];