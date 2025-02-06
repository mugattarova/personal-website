/** @type {import('tailwindcss').Config} */
import colors, { transparent } from 'tailwindcss/colors';

export const content = [
  './src/pages/**/*.{js,jsx,ts,tsx}',
  './src/components/**/*.{js,jsx,ts,tsx}',
];
export const theme = {
  extend: {
    backgroundImage: {
      'main-img': "url('../../static/img/abstract-bg-dupl-friendly.png')",
      'main-img-inv': "url('../../static/img/abstract-bg-dupl-friendly-inv.png')",
      'main-img-blur': "url('../../static/img/abstract-bg-dupl-friendly-blur.png')",
    },
    textDecorationThickness: {
      1: '1px',
    }, 
    gradientColorStops: ({ theme }) => ({
      'logo-gradient': [
        theme('colors.periwinkle'),
        theme('colors.lilac.500'),
        theme('colors.carolina-blue'),
        theme('colors.blue-munsell.300'),
      ]
    }),
  },
  colors: {
    transparent: colors.transparent,
    'white': colors.white,
    'black': colors.black,
    'offwhite': '#eeedf3',
    'periwinkle': '#cfd7fe',
    'jordy-blue': '#97c3f2',
    'carolina-blue': '#7cb4cf',
    'dark-blue': '#31545e',
    gray: colors.gray,
    rose: colors.rose,
    'lilac': {             //500
      '50': '#f9f6f9',
      '100': '#f5eef5',
      '200': '#ebdeec',
      '300': '#ddc3de',
      '400': '#c99dc9',
      '500': '#b57db3',
      '600': '#9f639a',
      '700': '#874f80',
      '800': '#71436c',
      '900': '#603b5b',
      '950': '#381f35',
  },
  'blue-munsell': {       //800
    '50': '#f1f9fa',
    '100': '#dceff1',
    '200': '#bde1e4',
    '300': '#8fcad1',
    '400': '#5aacb6',
    '500': '#3e909c',
    '600': '#377683',
    '700': '#32616c',
    '800': '#31545e',
    '900': '#2b454e',
    '950': '#182c34',
},

    // 'periwinkle': {         //200
    //   '50': '#eef1ff',
    //   '100': '#e0e6ff',
    //   '200': '#cfd7fe',
    //   '300': '#a5b1fc',
    //   '400': '#8188f8',
    //   '500': '#6463f1',
    //   '600': '#5446e5',
    //   '700': '#4738ca',
    //   '800': '#3a30a3',
    //   '900': '#332e81',
    //   '950': '#1f1b4b',
    // },
    // 'jordy-blue': {         //300
    //   '50': '#f1f6fd',
    //   '100': '#deeafb',
    //   '200': '#c5ddf8',
    //   '300': '#97c3f2',
    //   '400': '#6fa8eb',
    //   '500': '#4d88e4',
    //   '600': '#386cd8',
    //   '700': '#2f59c6',
    //   '800': '#2c48a1',
    //   '900': '#284080',
    //   '950': '#1d294e',
    // },
    // 'carolina-blue': {      //400
    //     '50': '#f4f8fb',
    //     '100': '#e8f0f6',
    //     '200': '#cbe0ec',
    //     '300': '#9dc7dc',
    //     '400': '#7cb4cf',
    //     '500': '#458eb2',
    //     '600': '#337296',
    //     '700': '#2b5c79',
    //     '800': '#274e65',
    //     '900': '#254255',
    //     '950': '#182b39',
    // },
  },
};
export const plugins = [];
