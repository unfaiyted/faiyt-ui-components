import {useTheme} from "../utilities/hooks/ThemeHook";
import React from "react";
import PropTypes from "prop-types";

import "../../styles/card.scss"

const Card = ({ header, footer, theme, children,...props}) => {
  const {themePrefix, styles} = useTheme(theme);

  console.log("header",typeof header);

  const headerType = (typeof header === "object") ? "object" : "other";

  return (
    <div
      className={[`${themePrefix}-card`].join(' ')}
      style={styles}
      {...props}>
      {header &&
      <div  className={[`${themePrefix}-card-header`,`${themePrefix}-card-header--${headerType}`].join(' ')}>
        {header}
      </div>
      }

      <div className={[`${themePrefix}-card-content`].join(' ')}>
        {children}
      </div>

      {footer &&
      <div className={[`${themePrefix}-card-footer`].join(' ')}>
        {footer}
      </div>
      }

    </div>
  )

}


Card.propTypes =  {
  /**
   * Content to be rendered inside of the Box
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /**
   * Content to be displayed at the top of the card
   */
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
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

Card.defaultProps = {

}

export default Card;
