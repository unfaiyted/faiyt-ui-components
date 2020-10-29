import React from 'react';
import PropTypes from 'prop-types';
import {useTheme} from "../utilities/hooks/ThemeHook";

/**
 * Provided a link component for remote locations or other pages
 */

//TODO: Add in icon abilities for displaying with the anchor.
export const Anchor = ({ label, href, onClick, disabled,
                         theme, ...props}) =>
{

  const {themePrefix, styles} = useTheme(theme);

  return (
    <a href={href}  disabled
      className={[`${themePrefix}-anchor`].join(' ')}
       style={styles}
      {...props}
    >
      {label}
    </a>)
}


Anchor.propTypes =  {
  /**
   * Content to be rendered inside of the Anchor
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Location to send when clicked
   */
  href: PropTypes.string,
  /**
   * Function that is ran when the user clicks on the element
   */
  onClick: PropTypes.func,
  /**
   * Changes the current theme for the component
   */
  theme: PropTypes.object,
  /**
   * Changes if the anchor is clickable or not
   */
  disabled: PropTypes.bool

}

Anchor.defaultProps = {
  label: null,
  href: null,
  disabled: false,
  onClick: undefined,
  theme: {}
}

export default Anchor;
