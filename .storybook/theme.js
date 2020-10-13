import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',

  colorPrimary: '#fff',
  colorSecondary: '#b14040',

  // UI
  appBg: '#161A1D',
  appContentBg: '#F5F3F4',
  appBorderColor: '#5d0a0a',
  appBorderRadius: 5,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#161A1D',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#aeaeae',
  barSelectedColor: '#fff',
  barBg: '#161A1D',

  // Form colors
  inputBg: '#fff',
  inputBorder: '#F5F3F4',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Faiyt.dev Component Library',
  brandUrl: 'https://faiyt.dev',
  brandImage: 'https://placehold.it/350x150',
});
