import PropTypes from 'prop-types';
import React from 'react';

export class CollapseHeader extends React.Component {
  constructor(props) {
    super(props);

    this.collapse = this.onCollapse.bind(this);
  }

  componentWillMount() {
    this.setState({ collapsed: false });
  }

  onCollapse() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
    const panelStyle = 'collapse-header panel ' + (!this.state.collapsed && this.props.panelStyle || 'panel-default');
    return (<div className={`${panelStyle} ${this.props.className || ''}`}>
      <div className="panel-heading" onClick={this.collapse}>
        <div className="panel-title">{this.props.heading}</div>
      </div>
      {!this.state.collapsed && <div className="panel-body">{this.props.children}</div>}
    </div>);
  }
}

CollapseHeader.propTypes = {
  heading: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.element
  ]),
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.element
  ]),
  panelStyle: PropTypes.string,
  className: PropTypes.string
};
