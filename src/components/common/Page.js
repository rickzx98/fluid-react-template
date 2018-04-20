import { PageBody } from './PageBody';
import { PageHeader } from './PageHeader';
import PropTypes from 'prop-types';
import React from 'react';

export const Page = ({ className, label = '', icon, loading = false, children, banner }) => {
  let classNameProp = `page ${className || ''}`;
  return (<div className={classNameProp}>
    <PageHeader label={label} iconName={icon} loading={loading} imageUrl={banner} />
    <PageBody>{children}</PageBody>
  </div>);
};

Page.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  loading: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  banner: PropTypes.string
};
