import React from 'react';
import PropTypes from 'prop-types';
import {PREFIX} from "../../utils/constants";


/**
 * ???
 */
export const Tabs = ({text, href, onClick, classPrefix = PREFIX, ...props}) => {
  return (
    <div
       onClick={onClick}
       className={[`${classPrefix}-anchor`].join(' ')}
       {...props}>
      {text}
    </div>)
}


Tabs.propTypes =  {
  /**
   * Content to be rendered inside of the Anchor
   */
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Location to send when clicked
   */
  href: PropTypes.string,
  /**
   * Function that is ran when the user clicks on
   */
  onClick: PropTypes.func
}

Tabs.defaultProps = {

}

export default Tabs;
