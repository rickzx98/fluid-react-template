import PropTypes from 'prop-types';
import React from 'react';

export const FieldView = ({ children }) => {
    return <div className="field-view">{children || 'N/A'}</div>;
};

FieldView.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array,
        PropTypes.string,
        PropTypes.object
    ]).isRequired
};


