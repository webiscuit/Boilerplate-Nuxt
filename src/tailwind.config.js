/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  separator: '_',
  theme: {
    extend: {
      fontFamily: {
        body: ['Quicksand', 'Noto Sans JP', 'sans-serif'],
      },
      colors: {
        pink: {
          // lighter: '#ee9ca7',
          lighter: '#f58a98',
          default: '#d66d8c',
          // darker: '#',
        },
        blue: {
          // lighter: '#a7bfe8',
          lighter: '#91b0e6',
          default: '#65a6d4',
          // darker: '#',
        },
        green: {
          default: '#5da6a8',
        },
        gray: {
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
          'lighter': '#aaa',
          'default': '#333',
        },
        sns: {
          'twitter': '#1DA1F2',
          'facebook': '#3B5998',
          'codepen': '#333',
          'qiita': '#55C500'
        }
      },
      lineHeight: {
        none: 1.8,
        tight: 1.25,
        snug: 1.375,
        normal: 1.8,
        relaxed: 1.86,
        loose: 2,
      },
      fontSize: {
        'xs': '0.875rem',
        'sm': '0.9375rem',
        '2xl': '1.6875rem',
        '3xl': '1.75rem',
        '4xl': '2rem',
        '6xl': '3.5rem',
        '7xl': '3.75rem',
        'icon': '6rem'
      },
      width: {
        '1_2': '50%',
        '1_3': '33.333333%',
        '2_3': '66.666667%',
        '1_4': '25%',
        '2_4': '50%',
        '3_4': '75%',
        '1_5': '20%',
        '2_5': '40%',
        '3_5': '60%',
        '4_5': '80%',
        '1_6': '16.666667%',
        '2_6': '33.333333%',
        '3_6': '50%',
        '4_6': '66.666667%',
        '5_6': '83.333333%',
        '1_12': '8.333333%',
        '2_12': '16.666667%',
        '3_12': '25%',
        '4_12': '33.333333%',
        '5_12': '41.666667%',
        '6_12': '50%',
        '7_12': '58.333333%',
        '8_12': '66.666667%',
        '9_12': '75%',
        '10_12': '83.333333%',
        '11_12': '91.666667%',
      }
    }
  }
  // variants: {},
  // plugins: []
}
