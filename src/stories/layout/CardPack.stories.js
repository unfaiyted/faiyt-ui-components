import React from 'react';
import {PREFIX} from "../../utils/constants";
import  CardPack  from '../../components/layout/CardPack';
import * as CardStories from '../layout/Card.stories';
import Card from "../../components/layout/Card";


export default {
  title: 'Controls/CardPack',
  component: CardPack,
  argTypes: {
    theme: {
      styles: {
        backgroundColor: { control: 'color' },
      }
    },

  },
};

const FullCard = <Card  />


// const ThreeCards =

const Template = (args) => <CardPack {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <><Card {...CardStories.Default.args} /> <Card {...CardStories.Default.args} /></>
};


export const NoHeader = Template.bind({});
NoHeader.args = {
  children: <><Card {...CardStories.Default.args} /> <Card {...CardStories.Default.args} /> <Card {...CardStories.Default.args} /></>
};


export const Horizontal = Template.bind({});
Horizontal.args = {
  children: <><Card {...CardStories.Default.args} /> <Card {...CardStories.Default.args} /> </>
};
