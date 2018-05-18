import { PropTypes, React } from '../imports';

import { PageForm } from '../PageForm/PageForm';
import { PageModules } from './PageModules';
import { PageTabbedForm } from '../PageForm/PageTabbedForm';

export class PageSubModules extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasModules: false
    };
  }
  componentWillMount() {
    this.refresh();
  }
  refresh() {
    if (this.props.modules && this.props.modules.length > 0) {
      this.hasModules();
    }
  }
  hasModules() {
    this.setState({ hasModules: true });
  }
  render() {
    return (<div className="page-sub-modules clearfix">
      {this.state.hasModules && (<PageModules onClick={this.props.goToPage} formValue={this.props.formValue} modules={this.props.modules} />)}
      <div className={`${!this.props.tabbed && 'page-form'} clearfix ${this.state.hasModules ? 'col-sm-9' : 'no-sub-modules-links'}`}>
        {this.props.overridePages.view && this.props.overridePages.view(this.props)}
        {!this.props.overridePages.view && !this.props.tabbed && <PageForm {...this.props} />}
        {!this.props.overridePages.view && this.props.tabbed && <PageTabbedForm {...this.props} />}
      </div>
    </div>);
  }
}

PageSubModules.propTypes = {
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
  modules: PropTypes.array,
  goToPage: PropTypes.func.isRequired,
  overridePages: PropTypes.object,
  tabbed: PropTypes.bool,
  onSelectTab: PropTypes.func
};
