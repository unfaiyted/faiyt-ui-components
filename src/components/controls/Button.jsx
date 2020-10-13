import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/button.scss';
import {PREFIX} from "../../utils/constants";

/**
 * Primary UI component for user interaction.
 */
export const Button = ({ primary, backgroundColor, size, label, classPrefix = PREFIX ,...props }) => {
  const mode = primary ? `${classPrefix}-button--primary` :  `${classPrefix}-button--secondary`;
  return (
    <button
      type="button"
      className={[ `${classPrefix}-button`,  `${classPrefix}-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};


Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional custom style prefix for themeing
   */
  classPrefix: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  classPrefix: undefined,
  onClick: undefined,
};

export default Button;
