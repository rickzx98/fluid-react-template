import {React, PropTypes, FontAwesome} from "../imports";

export const PageDefaultLink = ({link, onClick}) => (
  <a onClick={onClick} className={`page-link list-group-item ${!link.root && link.group && 'grouped'} ${link.active ? 'active' : ''}`}>{link.icon &&
  <FontAwesome name={link.icon} fixedWidth size="lg"/>}&nbsp;{link.label} {link.root &&
  (<span className="pull-right">{link.show ? <FontAwesome name="caret-down" fixedWidth size="lg"/> :
    <FontAwesome name="caret-left" fixedWidth size="lg"/>}</span>)}</a>);

PageDefaultLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  link: PropTypes.object.isRequired
};
