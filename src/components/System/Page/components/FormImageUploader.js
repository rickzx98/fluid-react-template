import {React, PropTypes, Dropzone, ReactImage, FluidForm} from '../imports';

export class FormImageUploader extends React.Component {
  constructor(prop) {
    super(prop);
    this.getValue = this._getValue.bind(this);
    this.onDrop = this.onDropFiles.bind(this);
    this.inputProps = {
      name: prop.field.name,
      required: prop.field.isRequired,
      disabled: prop.field.isDisabled
    };
  }

  _getValue(formValue) {
    const value = FluidForm.getValue(formValue, this.props.field.name);
    let file = {preview: '/upload-image.png'};
    if (value.preview) {
      file = value;
    }
    return file;
  }

  onDropFiles(accepted) {
    if (accepted) {
      FluidForm.set(this.props.formName, this.props.field.name, {...accepted[0]});
    }
  }

  render() {
    return (<div className="image-upload">
      <Dropzone disabled={this.props.readOnly} multiple={false}
                accept="image/jpeg, image/png"
                onDrop={this.onDrop}
                className="book">
        <ReactImage src={this.getValue(this.props.formValue).preview}/>
      </Dropzone>
      <input {...this.inputProps} type="hidden"/>
    </div>);
  }
}

FormImageUploader.propTypes = {
  formName: PropTypes.string,
  field: PropTypes.object,
  formValue: PropTypes.object.isRequired,
  readOnly: PropTypes.bool
};
