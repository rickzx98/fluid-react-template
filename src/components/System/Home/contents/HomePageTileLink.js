import { FluidFunc, FontAwesome, PropTypes, React, getLabel } from "../imports";
import { ON_CLICK, ON_CLICK_LINK } from "../fluid.info";

export const HomePageTileLink = ({ pages }) => (<div className="home-page-tile-link-container">
    {pages.filter(page => !page.skipLink).map(page => (<div
        onClick={() => {
            FluidFunc.start(ON_CLICK, {
                command: ON_CLICK_LINK,
                url: page.path
            });
        }}
        key={`${page.name}_link`} className="home-page-tile-link">
        <FontAwesome fixedWidth size="lg" name={page.icon} />{getLabel(page.label)}
    </div>))}
</div>);
HomePageTileLink.propTypes = {
    pages: PropTypes.array.isRequired
};