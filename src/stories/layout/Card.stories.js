import React from 'react';
import {PREFIX} from "../../utils/constants";
import  Card  from '../../components/layout/Card';

export default {
  title: 'Layout/Card',
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


export const BigCard = Template.bind({});
BigCard.args = {
  header: "header",
  footer: "footer",
  children: "My Content is much longer than the other cards in the list. " +
    "See it should make this card longer than any others if in a pack. The other cards should expand to maintain a " +
    "consistent look."
};


export const HeaderAsImg = Template.bind({});
HeaderAsImg.args = {
  header: <img src="http://placekitten.com/200/200" alt="test picture"/>,
  footer: "footer",
  children: "My Content is much longer than the other cards in the list. " +
    "See it should make this card longer than any others if in a pack. The other cards should expand to maintain a " +
    "consistant look."
};

