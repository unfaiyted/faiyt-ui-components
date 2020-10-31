import React from 'react';
import {PREFIX} from "../../utils/constants";
import  Card  from '../../components/layout/Card';

export default {
  title: 'Controls/Card',
  component: Card,
  argTypes: {
    theme: {
      styles: {
        backgroundColor: { control: 'color' },
      }
    },

  },
};


const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
 header: "header",
 footer: "footer",
 children: "My Content"
};


export const NoHeader = Template.bind({});
NoHeader.args = {
  footer: "footer",
  children: "My Content"
};


export const NoFooter = Template.bind({});
NoFooter.args = {
  header: "header",
  children: "My Content"
};
