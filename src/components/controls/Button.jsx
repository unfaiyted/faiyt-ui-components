import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/button.scss';
import {PREFIX} from "../../utils/constants";
import {useTheme} from "../utilities/hooks/ThemeHook.js"
/**
 * Primary UI component for user interaction.
 */
export const Button = ({ primary, backgroundColor, size, label, theme, className,...props }) => {

  const {themePrefix} = useTheme(theme);

  const mode = primary ? `${themePrefix}-button--primary` :  `${themePrefix}-button--secondary`;

  return (
    <button
      type="button"
      className={[ `${themePrefix}-button`,  `${themePrefix}-button--${size}`, mode, className].join(' ')}
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
   * Optional custom style object to apply overrides
   */
  theme: PropTypes.shape({
    /**
     * This is the global theme designation
     */
    theme: PropTypes.string,
    /**
     * These are styles applied directly to the
     * object.
     */
    styles: PropTypes.object
  }),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  theme: {},
  onClick: undefined,
};

export default Button;
