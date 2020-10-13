import React from 'react';

import { CodeBlock } from '../../components/type/CodeBlock.jsx';

export default {
  title: 'Type/CodeBlock',
  component: CodeBlock,
};




const codeBlock = `
        import React, { useState } from 'react';
        function Example() {
        // Declare a new state variable, which we'll call "count"
        const [count, setCount] = useState(0);

        return (
        <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
        Click me
        </button>
        </div>
        );
      }
  `

const cssBlock = `
    // Media queries
  @mixin for-size($size) {
    @if $size == phone-only {
      @media (max-width: 599px) { @content; }
    } @else if $size == tablet-portrait-up {
      @media (min-width: 600px) { @content; }
    } @else if $size == tablet-landscape-up {
      @media (min-width: 900px) { @content; }
    } @else if $size == desktop-up {
      @media (min-width: 1200px) { @content; }
    } @else if $size == big-desktop-up {
      @media (min-width: 1800px) { @content; }
    } @else if is-absolute-length($size) {
      @media (min-width: $size) { @content; }
    }
  }
`



const Template = (args) => <CodeBlock {...args} />;


export const Default = Template.bind({});
Default.args = {
  codeString: `console.log("hello");`
};

export const Javascript = Template.bind({});
Javascript.args = {
  codeString: codeBlock
};

export const CSS = Template.bind({});
CSS.args = {
  language: "css",
  codeString: cssBlock
};

export const StyleModifierRedBackground = Template.bind({});
StyleModifierRedBackground.args = {
  language: "css",
  codeString: cssBlock,
  customStyles: {
    "pre[class*=\"language-\"]": {
      "background": "#7a4b4b",
    }
  }
};

