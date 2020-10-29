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
       className={[`${themePrefix}-nav`, `${themePrefix}-nav--${direction}`, classNames].join(' ')}
       style={styles}
       {...props}
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

  if(item?.items) {
    return (
      <li
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        className={`${themePrefix}-nav-item ${classNames}`}
      >
        <a href={item?.href}> {item.label} </a>
        <NavDropDown items={item.items} theme={item?.theme} isShown={isShown} />
      </li>)
  }

  return (<li
    className={`${themePrefix}-nav-item ${classNames}`}
  ><a href={item?.href}> {item.label} </a></li>)
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
   <div
     className={[`${themePrefix}-nav-dropdown`, `${themePrefix}-nav-dropdown--${displayed}`, classNames].join(' ')}
   >
     {items.map((item) => {
       return (<NavItem item={item} />)
     })}

   </div>
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
    label: PropTypes.string.isRequired,
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
