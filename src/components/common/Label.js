import React from 'react';
import PropTypes from 'prop-types';
const LOCALE = process.env.LOCALE || 'en';
const APP_LABEL = process.env.APP_LABEL || 'main';

import { FluidLabel } from 'fluid-commons';

export const Label = ({label})=> (<FluidLabel locale={LOCALE} name={APP_LABEL} label={label}/>);

Label.propTypes = {
  label: PropTypes.string.isRequired
};
