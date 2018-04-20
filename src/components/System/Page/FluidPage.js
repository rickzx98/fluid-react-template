import { PropTypes, React, UrlPattern } from './imports';

export class FluidPage extends React.Component {
  constructor(props) {
    super(props);
    if (props.lifeCycle) {
      const lifeCycle = props.lifeCycle(this);
      for (let field in lifeCycle) {
        if (lifeCycle.hasOwnProperty(field)) {
          switch (field) {
            case 'componentWillMount':
            case 'render':
            case 'componentDidMount':
            case 'componentWillReceiveProps':
            case 'shouldComponentUpdate':
            case 'componentDidUpdate':
            case 'componentWillUnmount':
            case 'componentDidCatch':
              this[field] = lifeCycle[field];
              break;
            default: {
              const action = lifeCycle[field];
              if (action instanceof Function) {
                this[field] = lifeCycle[field].bind(this);
              } else {
                this[field] = lifeCycle[field];
              }
              break;
            }
          }
        }
      }
    }
    if (props.pages) {
      for (let field in props.pages) {
        if (props.pages.hasOwnProperty(field)) {
          this[field] = ((callback) => {
            const pattern = new UrlPattern(props.pages[field]);
            const { location: { pathname } } = this.props.routing;
            const { params } = this.props.match;
            if (pattern.match(pathname)) {
              return callback(params);
            }
          }).bind(this);
        }
      }
    }
  }
}

FluidPage.propTypes = {
  lifeCycle: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  pages: PropTypes.object,
  routing: PropTypes.object.isRequired
};
