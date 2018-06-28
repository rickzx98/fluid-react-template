import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

export const PageHeader = ({ label, iconName, imageUrl }) => {
  let style;
  if (imageUrl) {
    style = { backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover' };
  }
  return (<div style={style} className="page-header animated fadeIn">
    {/* <div className="page-background-fader" /> */}
    <div className="page-header-title">
      <div className="page-header-brand">
        <FontAwesome  name={iconName} size="lg" fixedWidth={true} />
        <span> {label} </span>
      </div>
    </div>
  </div>);
};

PageHeader.propTypes = {
  imageUrl: PropTypes.string,
  label: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired
};
