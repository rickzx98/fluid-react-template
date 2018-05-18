import {
  FluidForm,
  FormGroup,
  HiddenButton,
  ModelValueTransformer,
  PropTypes,
  React,
  Tab,
  Tabs,
  readOnlyWrapper,
  FluidFunc
} from '../imports';

import {FormInput} from './FormInput';
import {FormView} from './FormView';
import {FLUID_GO_TO_TAB} from '../constants';

export class PageTabbedForm extends React.Component {
  static select(pageName, eventKey) {
    return FluidFunc.start(`${pageName}_${FLUID_GO_TO_TAB}`, {eventKey});
  }

  constructor(props) {
    super(props);
    this.state = {activeKey: 1};
    this.setActiveKey = this._setActiveKey.bind(this);
    this.selectTab = this._selectTab.bind(this);
    FluidFunc.create(`${props.formName}_${FLUID_GO_TO_TAB}`)
      .onStart(({eventKey}) => {
        this.selectTab(eventKey());
      }).spec('eventKey', {require: true});
  }

  _selectTab(eventKey) {
    this.setActiveKey(eventKey);
    if (this.props.onSelectTab) {
      this.props.onSelectTab(eventKey);
    }
  }

  _setActiveKey(activeKey) {
    this.setState({activeKey});
  }

  renderTab(groups) {
    const {
      formValue,
      readOnly,
      viewValueTransformer,
      fieldClass = () => '',
      fieldComponent,
      viewComponent, formName
    } = this.props;
    const tabs = [];
    let eventKey = 1;
    for (let field in groups) {
      if (groups.hasOwnProperty(field)) {
        tabs.push((<Tab key={field} title={field} eventKey={eventKey}>
          <div className="page-form-tab-content clearfix">
            <div className={`${this.props.extraContent ? 'col-sm-6' : ''}`}>
              {groups[field].map((field, index) =>
                (<FormGroup
                  invalid={field.isInvalid}
                  required={field.require}
                  key={field.name} label={field.label}
                  name={field.name}
                  className={fieldClass(field.name, index)}>
                  {readOnlyWrapper(<FormView
                      field={field}
                      formValue={formValue}
                      viewValueTransformer={viewValueTransformer}
                      viewComponent={viewComponent}/>,
                    (<FormInput
                      formName={formName}
                      FieldComponent={fieldComponent}
                      field={field}
                      formValue={formValue}/>), readOnly)}
                </FormGroup>))}
            </div>
            {this.props.extraContent && <div className="col-sm-6 extra-content">{this.props.extraContent(field)}</div>}
          </div>
        </Tab>));
      }
      eventKey++;
    }
    return tabs;
  }

  render() {
    const {
      formName,
      formSpecs,
      onSubmit, onFailed,
      modelValueTransformer
    } = this.props;
    return (<FluidForm name={formName} specs={formSpecs}
                       onSubmit={(formValue) => ModelValueTransformer(formValue, modelValueTransformer, onSubmit)}
                       onFailed={onFailed} fieldNodeGroup={(groups) =>
      (<Tabs activeKey={this.state.activeKey} onSelect={this.selectTab} className="page-tabbed-form"
             id={this.props.formName + '_tab'} defaultActiveKey={1}>
        {this.renderTab(groups)}
      </Tabs>)}>
      <HiddenButton/>
    </FluidForm>);
  }
}

PageTabbedForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onFailed: PropTypes.func.isRequired,
  formValue: PropTypes.object.isRequired,
  readOnly: PropTypes.bool,
  formName: PropTypes.string.isRequired,
  formSpecs: PropTypes.func.isRequired,
  fieldClass: PropTypes.func,
  fieldComponent: PropTypes.func,
  viewComponent: PropTypes.func,
  viewValueTransformer: PropTypes.func,
  modelValueTransformer: PropTypes.func,
  extraContent: PropTypes.func,
  onSelectTab: PropTypes.func
};
