import {FluidForm, PropTypes, React, DatePicker, moment} from '../imports';

export class FormDate extends React.Component {

  static transformSmallValue(value) {
    if (value) {
      return moment(value).format('MMM Do YY');
    }
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this._onChange.bind(this);
  }

  _onChange(value) {
    this.setValue(value);
  }

  setValue(value) {
    FluidForm.set(this.props.formName, this.props.field.name, value);
  }

  render() {
    const {field, formValue} = this.props;
    return (<DatePicker
      calendarClassName="form-date-calendar"
      onChange={this.onChange}
      placeholder={field.label} className="form-date"
      value={FluidForm.getValue(formValue, field.name)}/>);
  }
}

FormDate.propTypes = {
  formName: PropTypes.string.isRequired,
  field: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  formValue: PropTypes.object.isRequired
};
