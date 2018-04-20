import { FluidTable, PropTypes, React } from '../imports';

import { PageLinks } from '../PageLinks/PageLinks';

export class PageListWithLinks extends React.Component {
  render() {
    return (<div className="page-list-with-links">
      {this.props.links && this.props.links.length > 0 && (<PageLinks goToUrl={this.props.goToUrl}
        props={this.props.props} state={this.props.state} links={this.props.links} />)}
      <div className={`page-table ${this.props.links && this.props.links.length > 0 ? 'col-md-9' : ''}`}>
        <FluidTable name={this.props.name}
          fieldKey={this.props.fieldKey || '_id'}
          onSelect={this.props.onSelect}
          className="table table-condensed table-hover"
          columns={this.props.columns} value={this.props.data} />
      </div>
    </div>);
  }
}

PageListWithLinks.propTypes = {
  links: PropTypes.array,
  data: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  columns: PropTypes.array.isRequired,
  props: PropTypes.object,
  state: PropTypes.object,
  goToUrl: PropTypes.func.isRequired,
  fieldKey: PropTypes.string,
  name: PropTypes.string.isRequired
};
