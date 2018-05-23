import { PropTypes, React, Route, Switch } from "../imports";

export const PageRoutes = ({ crudPages }) => (<Switch>
    {crudPages.map(page => (<Route
        key={page.path}
        path={page.path}
        component={page.component} />))}
</Switch>);

PageRoutes.propTypes = {
    crudPages: PropTypes.array.isRequired
};