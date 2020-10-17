import React from 'react';
import PropTypes from 'prop-types';
import {useTheme} from "../utilities/hooks/ThemeHook";


/**
 * A Box Container for multipurposes
 */
export const Box = ({children, theme, ...props}) => {

  const {themePrefix, styles} = useTheme(theme);

  return (
    <div
      className={[`${themePrefix}-box`].join(' ')}
      style={styles}
      {...props}>
      {children}
    </div>)
}

Box.propTypes =  {
  /**
   * Content to be rendered inside of the Box
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Modifications to the theme
   */
  theme: PropTypes.shape({
    theme: PropTypes.string,
    styles: PropTypes.object,
  })
}

Box.defaultProps = {

}

export default Box;
