import React from "react"
import CheckBoxImport from "./components/inputs/CheckBox.jsx";
import CheckBoxGroupImport from "./components/inputs/CheckBoxGroup.jsx";
import ButtonImport from "./components/controls/Button.jsx"
import AnchorImport from "./components/controls/Anchor.jsx"
import HeaderImport from "./components/layout/Header.jsx";
import CodeBlockImport from "./components/type/CodeBlock.jsx";
import  ThemeContextImport, {ThemeProvider as TP, ThemeConsumer as TC} from "./components/utilities/ThemeContext.jsx";
import {useTheme as UT} from "./components/utilities/hooks/ThemeHook.js";
import NavImport from "./components/controls/Nav.jsx"

export const CodeBlock = CodeBlockImport;
export const Header = HeaderImport;
export const CheckBoxGroup = CheckBoxGroupImport;
export const CheckBox = CheckBoxImport;
export const Anchor = AnchorImport;
export const Button = ButtonImport;
export const Nav = NavImport;
export const ThemeContext = ThemeContextImport
export const ThemeConsumer = TC;
export const ThemeProvider = TP;
export const useTheme = UT;
