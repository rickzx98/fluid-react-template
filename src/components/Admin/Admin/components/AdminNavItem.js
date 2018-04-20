import { FontAwesome, NavItem, PropTypes, React, getLabel } from '../imports';

import { PAGE_NAME } from '../constants';

export const AdminNavItem = ({ eventKey }) => {
  return (<NavItem href={`/${PAGE_NAME}`} eventKey={eventKey} title={getLabel('LABEL_ADMIN')} id="adminDropdown">
    <FontAwesome name="cogs" fixedWidth size="lg" />&nbsp;{getLabel('LABEL_ADMIN')}</NavItem>);
};

AdminNavItem.propTypes = {
  eventKey: PropTypes.number.isRequired
};
