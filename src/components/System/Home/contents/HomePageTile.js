import { PropTypes, React } from "../imports";

import { HomePageTileLink } from "./HomePageTileLink";

export const HomePageTile = ({ root, pageModule }) => {
    return (<div className="home-page-tile">
        <div className="home-page-tile-header">{root}</div>
        {pageModule.map(module => <HomePageTileLink key={module.name} pages={module.pages} />)}
    </div>);
};

HomePageTile.propTypes = {
    root: PropTypes.string.isRequired,
    pageModule: PropTypes.array.isRequired
};