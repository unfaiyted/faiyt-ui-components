import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useTheme} from "../utilities/hooks/ThemeHook";
import "../../styles/nav.scss";

/**
 * Provides a box container for navigation style links
 */
export const Nav = ({ direction, theme, items, ...props}) => {

  const {themePrefix, styles, classNames} = useTheme(theme);

  return (
    <ul
       style={styles}
       {...props}
       className={[`${themePrefix}-nav`, `${themePrefix}-nav--${direction}`, props?.className, classNames].join(' ')}
    >
      {items.map((item) => {
        return (<NavItem item={item}/>)
      })}

    </ul>)
}

/**
 * Render a single item to the nav list
 * @param item
 * @returns {JSX.Element}
 * @constructor
 */
const NavItem = ({item}) => {
  const [isShown, setIsShown] = useState(false);

  const {themePrefix, classNames} = useTheme(item?.theme);

  console.log("item.label", item.label, typeof item.label )


  const labelIsString = (typeof item.label === "string");


  if(item?.items) {
    return (
      <li
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        className={`${themePrefix}-nav-item ${classNames}`}
      >
        {labelIsString &&
          <a href={item?.href}> {item.label} </a>
        }

        {
          !labelIsString && item.label
        }
        <NavDropDown items={item.items} theme={item?.theme} isShown={isShown} />
      </li>)
  }

  return (<li  className={`${themePrefix}-nav-item ${classNames}`} >

    {labelIsString &&
     <a href={item?.href}> {item.label} </a>
    }

    {
      !labelIsString && item.label
    }
  </li>)
};

/**
 * Renders the dropdown popup on hover of primary item
 * @param items
 * @param theme
 * @param className
 * @returns {JSX.Element}
 * @constructor
 */
const NavDropDown = ({items, isShown, theme}) => {
  const {themePrefix, classNames} = useTheme(theme);
  const displayed = (isShown) ? "shown" : "hidden"

  return (
   <ul
     className={[`${themePrefix}-nav-dropdown`, `${themePrefix}-nav-dropdown--${displayed}`, classNames].join(' ')}
   >
     {items.map((item) => {
       return (<NavItem item={item} />)
     })}

   </ul>
 )
}


Nav.propTypes =  {
  /**
   * Passing theme object to override theme elements
   */
  theme: PropTypes.object,
  /**
   * Orientation of the navigation
   */
  direction: PropTypes.oneOf(["horizontal","vertical"]),
  /**
   * Array of Object items that will be displayed
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    theme:  PropTypes.object,
    href: PropTypes.string,
  })),

}

Nav.defaultProps = {
  direction: "horizontal",
  theme: {},
  items: []
}

export default Nav;
