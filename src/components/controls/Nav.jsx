import React from 'react';
import PropTypes from 'prop-types';
import {useTheme} from "../utilities/hooks/ThemeHook";

/**
 * Provides a box container for navigation style links
 */
export const Nav = ({ direction, padding, theme, children, ...props}) =>
{

  const {themePrefix, styles} = useTheme(theme);

  return (
    <div
       className={[`${themePrefix}-nav`].join(' ')}
       style={styles}
       {...props}
    >
      {children}
    </div>)
}


Nav.propTypes =  {
  /**
   * Content to be rendered inside of the Anchor
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Location to send when clicked
   */
  direction: PropTypes.string,
  padding: PropTypes.string,
}

Nav.defaultProps = {
  label: null,
  href: null,
  disabled: false,
  onClick: undefined,
  themeOverrides: {}
}

export default Nav;
