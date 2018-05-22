import { FluidFunc, PropTypes, React } from "../imports";

import { COMMAND_SEARCH_LIST } from "../constants";

const CLEAR_SEARCH = "LinkSearch.CLEAR_SEARCH";
export class LinkSearch extends React.Component {
    static clearSearch(name) {
        return FluidFunc.start(CLEAR_SEARCH, {
            name
        });
    }
    constructor(props) {
        super(props);
        this.state = { value: "" };
        this.onChange = this._onChange.bind(this);
        this.$clearSearch = this._clearSearch.bind(this);
        FluidFunc.create(CLEAR_SEARCH).onStart(this.$clearSearch).spec("name", { require: true });
    }
    _clearSearch({ name }) {
        if (name() === this.props.name) {
            this._setValue("");
        }
    }
    _onChange(event) {
        this._setValue(event.target.value);
        if (this.props.onChange) {
            this.props.onChange(event.target.value);
        }
    }
    _setValue(value) {
        this.setState({ value });
        if (FluidFunc.exists(this.props.fluidLink)) {
            const { name, pageName, fetchAll = true } = this.props;
            FluidFunc.start(this.props.fluidLink, {
                command: COMMAND_SEARCH_LIST,
                pageName: pageName,
                search: {
                    value,
                    field: name,
                    fetchAll
                }
            });
        }
    }
    render() {
        const { label, name } = this.props;
        return (<div className="link-search clearfix adapt-link-theme">
            <label className="link-search-label">{label}</label>
            <input onChange={this.onChange}
                name={name}
                value={this.state.value}
                className="form-control" />
        </div>);
    }
}

LinkSearch.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pageName: PropTypes.string.isRequired,
    fluidLink: PropTypes.string.isRequired,
    fetchAll: PropTypes.bool,
    onChange: PropTypes.func
};
