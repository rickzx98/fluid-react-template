import { FluidLabel, LoadingBalls, Nav, Navbar, PropTypes, React } from '../imports';

import { HeaderControls } from './HeaderControls';

export const HeadersBody = ({ locale, appLabel, navComponents,
    ajax, routing, headers }) => {
    return (<Navbar collapseOnSelect fixedTop={true} fluid={true}>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="">
                    {!ajax.started && <img className="pull-left header-thumbnail" height="24" width="24" src="/app-icon.png" />}
                    {ajax.started && <div className="header-loader"><LoadingBalls /></div>}
                    <div className="pull-right"> <FluidLabel label="appName" locale={locale} name={appLabel} /></div></a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <HeaderControls router={routing} headers={headers} />
            <Nav className="header-controls-right" pullRight>
                {navComponents}
            </Nav>
        </Navbar.Collapse>
    </Navbar>);
};

HeadersBody.propTypes = {
    headers: PropTypes.object.isRequired,
    routing: PropTypes.object.isRequired,
    ajax: PropTypes.object.isRequired,
    locale: PropTypes.string.isRequired,
    appLabel: PropTypes.string.isRequired,
    navComponents: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func,
        PropTypes.array,
        PropTypes.element
    ])
};
