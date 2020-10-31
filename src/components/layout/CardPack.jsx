import {useTheme} from "../utilities/hooks/ThemeHook";
import React from "react";
import PropTypes from "prop-types";
import Box from "./Box";

import "../../styles/card.scss"

const CardPack = ({ direction, theme, children,...props}) => {
  const {themePrefix, styles} = useTheme(theme);

  return (
    <div
      className={[`${themePrefix}-card-pack`].join(' ')}
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

}

export default CardPack;
