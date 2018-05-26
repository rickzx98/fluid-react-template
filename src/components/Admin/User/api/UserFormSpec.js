import { User, getLabel } from "../imports";
export default () => [{
	label : undefined,
	field : User._ID,
	primaryKey : true,
	skipRender : true},
{
	label : getLabel("LABEL_USERNAME"),
	field : User.USERNAME,
	primaryKey : false,
	skipRender : false,
	data: {
require: true}},
{
	label : getLabel("LABEL_PASSWORD"),
	field : User.PASSWORD,
	primaryKey : false,
	skipRender : false,
	data: {
require: true}},
{
	label : getLabel("LABEL_CONFIRM_PASSWORD"),
	field : User.CONFIRMPASSWORD,
	primaryKey : false,
	skipRender : false,
	data: {
require: true}},
{
	label : getLabel("LABEL_EMAIL"),
	field : User.EMAIL,
	primaryKey : false,
	skipRender : false,
	data: {
require: true}},
{
	label : getLabel("LABEL_FULL_NAME"),
	field : User.FULLNAME,
	primaryKey : false,
	skipRender : false,
	data: {
require: true}}];