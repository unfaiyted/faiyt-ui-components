import React from 'react';

import { Themes } from './Themes';
import * as HeaderStories from '../layout/Header.stories';

export default {
  title: 'xUtilities/Theme',
  component: Themes,
};


const Template = (args) => <Themes {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...HeaderStories.LoggedIn.args,
};

export const Dark = Template.bind({});
Dark.args = {
  ...HeaderStories.LoggedOut.args,
};


export const InlineOverride = Template.bind({});
InlineOverride.args = {
  ...HeaderStories.LoggedOut.args,
};

