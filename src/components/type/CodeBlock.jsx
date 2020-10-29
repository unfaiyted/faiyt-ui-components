import React from "react";
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const pre = darcula["pre[class*=\"language-\"]"];

console.log(pre)

const styles = {
  ...darcula,
  "pre[class*=\"language-\"]": {
    ...pre,
    "borderRadius": "5px",
    "background": "#161a1d",
    "marginBottom": "40px"
  }
}


/**
 * Primary UI component for displaying code to the screen.
 */
export const CodeBlock = ({codeString, language = "javascript", customStyles = {}}) => {

  const mergedStyles = Object.assign(styles, customStyles);

  return (
    <SyntaxHighlighter
      language={language}
      useInlineStyles={true}
      style={mergedStyles}
      showLineNumbers={true}>
      {codeString}
    </SyntaxHighlighter>
  );
};


CodeBlock.propTypes = {

  /**
   * The code that is to be displayed on the page.
   */
  codeString: PropTypes.string.isRequired,
  /**
   * What language are you expected to format in the code block
   */
  language: PropTypes.string,
  /**
   * Custom CSS Styles Object
   */
  customStyles: PropTypes.object,
};

CodeBlock.defaultProps = {
  codeString: null,
  language: "javascript",
  customStyle: {}
};



export default CodeBlock;


