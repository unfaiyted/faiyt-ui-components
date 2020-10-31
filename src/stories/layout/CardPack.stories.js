import React from 'react';
import {PREFIX} from "../../utils/constants";
import  CardPack  from '../../components/layout/CardPack';
import * as CardStories from '../layout/Card.stories';
import Card from "../../components/layout/Card";


export default {
  title: 'Layout/CardPack',
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




export const MultipleCardTypes = Template.bind({});
MultipleCardTypes.args = {
  children: <><Card {...CardStories.Default.args} /> <Card {...CardStories.NoFooter.args} /> <Card {...CardStories.NoHeader.args} /></>
};


export const Vertical = Template.bind({});
Vertical.args = {
  direction: "vertical",
  children: <><Card {...CardStories.Default.args} /> <Card {...CardStories.Default.args} /> <Card {...CardStories.Default.args} /> </>
};


export const CardHeight = Template.bind({});
CardHeight.args = {
  children: (<>
    <Card {...CardStories.Default.args} />
    <Card {...CardStories.Default.args} />
    <Card {...CardStories.BigCard.args} />
  </>)
};



export const CardsWithImages = Template.bind({});
CardsWithImages.args = {
  children: (<>
    <Card {...CardStories.HeaderAsImg.args} />
    <Card {...CardStories.HeaderAsImg.args}
      header={<img src="http://placekitten.com/205/205" alt="test picture"/>}
    />
    <Card {...CardStories.HeaderAsImg.args}
          header={<img src="http://placekitten.com/300/300" alt="test picture"/>}
    />
  </>)
};
