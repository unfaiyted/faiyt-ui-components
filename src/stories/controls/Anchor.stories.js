import React from 'react';

import { Anchor } from '../../components/controls/Anchor';

export default {
  title: 'Controls/Anchor',
  component: Anchor,
  argTypes: {
    theme: {
      styles: {
        backgroundColor: { control: 'color' },
      }
    }
  },
};

const Template = (args) => <Anchor {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'I am an Anchor',
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
