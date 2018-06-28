import { PropTypes, React, getLabel } from "../imports";

export const HomePageSearch = ({ onSearch }) => (<div className="home-page-search">
    <form name="searchHomePage" onChange={onSearch}>
        <div className="input-group">
            <input name="searchHome" className="form-control" placeholder={getLabel("LABEL_SEARCH")} />
            <span className="input-group-addon"><i className="fa fa-search fa-large fa-fixedWith"/></span>
        </div>
    </form>
</div>);

HomePageSearch.propTypes = {
    onSearch: PropTypes.func.isRequired
};