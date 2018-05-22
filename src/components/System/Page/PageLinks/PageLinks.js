import { FontAwesome, Label, PropTypes, React } from '../imports';

import { PageLinkComponent } from "./PageLinkComponent";

function Link({ links, props, state, goToUrl, show, hide }) {
  return links.filter(link => link.isVisible && link.isVisible instanceof Function ? link.isVisible(props, state) : true)
    .filter(link => (link.group === undefined || link.root) || (link.group && link.show))
    .map(link => <PageLinkComponent key={link.name} goToUrl={goToUrl} show={show} hide={hide} link={link} />);
}

export class PageLinks extends React.Component {
  constructor(props) {
    super(props);
    this.show = this._show.bind(this);
    this.hide = this._hide.bind(this);
  }

  _show(group) {
    const links = [...this.props.links];
    links.filter(link => link.group === group).forEach(link => {
      link.show = true;
    });
    this.setState({ links });
  }

  _hide(group) {
    const links = [...this.props.links];
    links.filter(link => link.group === group).forEach(link => {
      link.show = false;
    });
    this.setState({ links });
  }

  render() {
    const { props, state, goToUrl, links } = this.props;
    return (<div className="page-links col-md-3">
      <div className="page-links-content list-group">
        <div className="list-group-item page-links-heading">
          <FontAwesome name="gears" fixedWidth size="lg" />&nbsp;<Label label="LABEL_OPTIONS" />
        </div>
        {Link({ links, props, state, goToUrl, show: this.show, hide: this.hide })}</div>
    </div>);
  }
}


PageLinks.propTypes = {
  links: PropTypes.array,
  props: PropTypes.object,
  state: PropTypes.object,
  goToUrl: PropTypes.func.isRequired
};

