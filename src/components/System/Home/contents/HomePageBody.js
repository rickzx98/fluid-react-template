import { Page, PropTypes, React, getLabel } from "../imports";

import { HomePageTiles } from "./HomePageTiles";

export const HomePageBody = ({ instance }) => {
    return (<Page className="home-page" icon="home" banner="./home-banner.jpg" label={getLabel("LABEL_HOME")}>
        <div className="page-form clearfix">
            <HomePageTiles onSearch={instance.onSearch} modules={instance.getModules()} />
        </div>
    </Page>);
};

HomePageBody.propTypes = {
    instance: PropTypes.object.isRequired
};