import { PropTypes, React } from '../imports';

export class FormInputNumber extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this._onChange.bind(this);
  }
  _onChange(event) {
    this._setValue(event.target.value);
  }
  _setValue(value) {
    if (value && value > -1) {
      this.props.setValue(value);
    } else {
      this.props.setValue(this.props.getValue());
    }
  }
  render() {
    const { field, getValue } = this.props;
    return (<input
      disabled={field.isDisabled}
      type="number"
      onChange={this.onChange}
      placeholder={field.label}
      name={field.name}
      className="form-input-number form-control"
      value={getValue()} />);
  }
}
FormInputNumber.propTypes = {
  field: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired,
  getValue: PropTypes.func.isRequired
};
