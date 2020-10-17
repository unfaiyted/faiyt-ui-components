import React from 'react';

import { Nav } from '../../components/controls/Nav';

export default {
  title: 'Controls/Nav',
  component: Nav,
  argTypes: {
    theme: {
      styles: {
        backgroundColor: { control: 'color' },
      }
    }
  },
};

const Template = (args) => <Nav {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'I am an Anchor',
  href: "https://faiyt.dev"
};

export const CollapsableNav = Template.bind({});
CollapsableNav.args = {
  label: 'A Link that is Disabled',
  disabled: true,
  href: "https://faiyt.dev"
};

export const SideBar = Template.bind({});
SideBar.args = {
  label: 'I am an Anchor that has been modified directly to look differently',
  theme: {
    styles: {
      backgroundColor: "red"
    }
  }
};

export const CustomTheme = Template.bind({});
CustomTheme.args = {
  label: 'I am an Anchor that has been modified directly to look differently',
  theme: {
    styles: {
      backgroundColor: "red"
    }
  }
};
