import React from "react";
import theme from "./theme";
import {ThemeProvider} from "../src/components/utilities/ThemeContext";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: theme,
  },
}



export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story/>
    </ThemeProvider>
  )
]
