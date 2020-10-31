import {useTheme} from "../utilities/hooks/ThemeHook";
import React from "react";
import PropTypes from "prop-types";

import "../../styles/card.scss"

/**
 * Used as a container to handle displaying a series of Card elements.
 */
const CardPack = ({ direction, theme, children,...props}) => {
  const {themePrefix, styles, classNames} = useTheme(theme);

  return (
    <div
      className={[`${themePrefix}-card-pack`, `${themePrefix}-card-pack--${direction}`, classNames].join(' ')}
      style={styles}
      {...props}>

      {children}

    </div>
  )

}


CardPack.propTypes =  {
  /**
   * Content to be rendered inside of the Box
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /**
   * Content to be displayed at the top of the card
   */
  direction: PropTypes.oneOf(["horizontal","vertical"]),
  /**
   * Content to be displayed at the bottom of the card
   */
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Modifications to the theme
   */
  theme: PropTypes.shape({
    theme: PropTypes.string,
    styles: PropTypes.object,
  })
}

CardPack.defaultProps = {
  direction: "horizontal",
  theme: {},
}

export default CardPack;
