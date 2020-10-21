import {useState, useEffect, useContext} from 'react';
import ThemeContext from "../ThemeContext.jsx"


export const useTheme = (props) => {

  const [ state, setState ] = useContext(ThemeContext);

  const changeTheme = (value) => {
    setState(state => ({...state, theme: value}))
  }

    return {
      themePrefix: props?.theme || state.theme,
      styles: props?.styles,
      state,
      changeTheme,
    }
};

export default useTheme;

