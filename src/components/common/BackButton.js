import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { browserHistory } from 'react-router';

export const BackButton = ({ label, confirm, to }) => {
  const onClick = () => {
    if (confirm) {
      const onPageLeave = confirm();
      if (onPageLeave instanceof Promise) {
        onPageLeave.then(() => {
          reRoute();
        }).catch(() => {
        });
      } else {
        reRoute();
      }
    } else {
      reRoute();
    }
  };
  const reRoute = () => {
    if (to) {
      browserHistory.push(to);
    } else {
      browserHistory.goBack();
    }
  };
  return (<button onClick={onClick} type="button" className="btn btn-danger"><FontAwesome fixedWidth={true}
    name="long-arrow-left" /><span
      className="hidden-xs">{label}</span></button>);
};

BackButton.propTypes = {
  label: PropTypes.string.isRequired,
  confirm: PropTypes.func,
  to: PropTypes.string
};
