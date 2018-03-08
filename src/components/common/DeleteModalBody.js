import PropTypes from 'prop-types';
import React from 'react';
import { getLabel } from '../../utils/';

export const DeleteModalBody = ({itemName}) => {
  return <p>{getLabel('LABEL_CONFIRM_DO_YOU_WANT_TO_DELETE') + ` ${itemName}?`}</p>;
};

DeleteModalBody.propTypes = {
  itemName: PropTypes.string.isRequired
};
