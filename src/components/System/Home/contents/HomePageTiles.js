import { PropTypes, React } from "../imports";

import { HomePageSearch } from "./HomePageSearch";
import { HomePageTile } from "./HomePageTile";

export const HomePageTiles = ({ modules, onSearch }) => {
    return (<div className="home-page-tiles col-sm-4">
        <HomePageSearch onSearch={onSearch} />
        {Object.keys(modules).map(root => <HomePageTile key={root} root={root} pageModule={modules[root]} />)
        }</div>);
};

HomePageTiles.propTypes = {
    modules: PropTypes.object.isRequired,
    onSearch: PropTypes.func.isRequired
};