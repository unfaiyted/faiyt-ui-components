import React from 'react';

import { Box } from '../../components/layout/Box';

export default {
  title: 'Layout/Box',
  component: Box,
  argTypes: {
    theme: {
      styles: {
        backgroundColor: { control: 'color' },
      }
    }
  },
};

const Template = (args) => <Box {...args} >I am box</Box>;

export const Default = Template.bind({});
Default.args = {
  label: 'I am an Box',
  href: "https://faiyt.dev"
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'A Link that is Disabled',
  disabled: true,
  href: "https://faiyt.dev"
};

export const ThemeOverrides = Template.bind({});
ThemeOverrides.args = {
  label: 'I am an Anchor that has been modified directly to look differently',
  theme: {
    styles: {
      backgroundColor: "red"
    }
  }
};

export const OnClick = Template.bind({});
OnClick.args = {
  label: 'I am an Anchor that triggers an onClick event. (Alert Popup)',
  onClick: () => { alert("hello!")}
};
