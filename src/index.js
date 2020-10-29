import React from "react"
import CheckBox from "./components/inputs/CheckBox.jsx";
import CheckBoxGroup from "./components/inputs/CheckBoxGroup.jsx";
import Button from "./components/controls/Button.jsx"
import Anchor from "./components/controls/Anchor.jsx"
import Header from "./components/layout/Header.jsx";
import CodeBlock from "./components/type/CodeBlock.jsx";
import  ThemeContext, {ThemeProvider, ThemeConsumer} from "./components/utilities/ThemeContext.jsx";
import {useTheme} from "./components/utilities/hooks/ThemeHook";

const Components = {
    //Controls
      Button,
      Anchor,
    //Inputs
      CheckBox,
      CheckBoxGroup,
    //Layout
      Header,
    //Type
      CodeBlock,
    //Utilities
      ThemeProvider,
      ThemeConsumer,
      ThemeContext,
      useTheme
}


export default Components;
