import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
export const CreateReduxPage = (ReactClass, mapState, actions) => {
  return connect(mapState,
    (dispatch) => {
      const bindActions = {};
      for (let field in actions) {
        if (actions.hasOwnProperty(field)) {
          bindActions[field] = bindActionCreators(actions[field], dispatch);
        }
      }
      return bindActions;
    })(ReactClass);
};
