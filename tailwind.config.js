/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.html',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          n0: '#FFFFFF',
          n10: '#FBFBFB',
          n20: '#F6F6F6',
          n40: '#E3E3E3',
          n60: '#BDBDBD',
          n80: '#A5A5A5',
          n100: '#8B8B8B',
          n300: '#727272',
          n500: '#5A5A5A',
          n700: '#414141',
          n900: '#292929',
        },
        pijarBlue: {
          p50: '#EAF3FA',
          p75: '#AACEE8',
          p100: '#87BADF',
          p200: '#539CD1',
          p300: '#3088C8',
          p400: '#225F8C',
          p500: '#1D537A',
        },
        pijarOrange: {
          p50: '#FEF5EC',
          p75: '#FBD4B2',
          p100: '#F9C392',
          p200: '#F7A963',
          p300: '#F59743',
          p400: '#AC6A2F',
          p500: '#955C29',
        },
        success: {
          s50: '#EEFAEA',
          s75: '#B9EAA8',
          s100: '#9CE183',
          s200: '#72D44E',
          s300: '#55CB2A',
          s400: '#3B8E1D',
          s500: '#347C1A',
        },
        info: {
          i50: '#',
          i75: '#',
          i100: '#',
          i200: '#',
          i300: '#',
          i400: '#',
          i500: '#',
        },
        warning: {
          i50: '#',
          i75: '#',
          i100: '#',
          i200: '#',
          i300: '#',
          i400: '#',
          i500: '#',
        },
        danger: {
          i50: '#',
          i75: '#',
          i100: '#',
          i200: '#',
          i300: '#',
          i400: '#',
          i500: '#',
        },
      }
    },
  },
  plugins: [],
}

