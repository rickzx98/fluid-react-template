import { User, getLabel } from "../imports";
export default [{
	label : getLabel("undefined"),
	field : User._ID,
	primaryKey : true,
	skipRender : true
},
{
	label : getLabel("LABEL_FULL_NAME"),
	field : User.FULLNAME,
	primaryKey : false,
	skipRender : false
},
{
	label : getLabel("LABEL_USERNAME"),
	field : User.USERNAME,
	primaryKey : false,
	skipRender : false
}];