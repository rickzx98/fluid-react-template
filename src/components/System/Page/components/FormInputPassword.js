import { PropTypes, React } from '../imports';

export class FormInputPassword extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { field, getValue } = this.props;
        return (<input
            disabled={field.isDisabled}
            type="password"
            placeholder={field.label}
            name={field.name}
            className="form-input-password form-control"
            value={getValue()} />);
    }
}
FormInputPassword.propTypes = {
    field: PropTypes.object.isRequired,
    setValue: PropTypes.func.isRequired,
    getValue: PropTypes.func.isRequired
};
