import React, {useState} from "react";
import {PREFIX} from "../../utils/constants";


const defaultSettings = {
  // Default Theme Settings
  theme: PREFIX
};

/**
 * Stores the Theme context for the application.
 * @type {React.Context<{theme: string}>}
 */
const ThemeContext = React.createContext(null);

export const ThemeProvider = ({children, settings}) => {

  const [state, setState] = useState(settings || defaultSettings);

  return (
    <ThemeContext.Provider value={[state, setState]}>
      {children}
    </ThemeContext.Provider>
  );

}

export const ThemeConsumer = ThemeContext.Consumer;
export default ThemeContext;
