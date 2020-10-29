import React from 'react';
import {PREFIX} from "../../utils/constants";
import { Nav } from '../../components/controls/Nav';

export default {
  title: 'Controls/Nav',
  component: Nav,
  argTypes: {
    theme: {
      styles: {
        backgroundColor: { control: 'color' },
      }
    },

  },
};


const items =  [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "Getting Started"
  },
  {
    label: "Services",
    items: [
      {
      label: "Couples"
      },
      {
        label: "Singles"
      },
      {
        label: "Other stuff"
      }
    ]
  },
  {
    label: "Blog"
  }
]


const Template = (args) => <Nav {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'I am an Anchor',
  href: "https://faiyt.dev",
  items: [
    {
      label: "Home"
    },
    {
      label: "Getting Started"
    },
    {
      label: "Blog"
    }
  ]
};

export const HorizontalNavigation = Template.bind({});
HorizontalNavigation.args = {
  items: [
    {
      label: "Home"
    },
    {
      label: "Getting Started"
    },
    {
      label: "Blog"
    }
  ]
};

export const SidebarNavigation = Template.bind({});
SidebarNavigation.args = {
  items,
  direction: "vertical"
};


export const CustomTheme = Template.bind({});
CustomTheme.args = {
  theme: {
    styles: {
      backgroundColor: "red"
    }
  },
  items
};


export const CustomThemeOnItems = Template.bind({});
CustomThemeOnItems.args = {
  theme: {
    styles: {
      backgroundColor: "red"
    }
  },
  items: [...items,

    {
      label: "Other Things",
      items: [
        {
          label: "Thing A"
        },
        {
          label: "Thing 2",
          theme: {
            classNames: `${PREFIX}-nav-button`
          }
        },
        {
          label: "Thing C"
        }
      ]
    },

  {
    label: "Call Us Today",
    theme: {
      classNames: `${PREFIX}-nav-button`
    }
  },



  ]
};

