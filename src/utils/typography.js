import './global.css'

import Typography from 'typography'
import sternGroveTheme from 'typography-theme-stern-grove'

delete sternGroveTheme.googleFonts

const customTheme = {
  ...sternGroveTheme,
  baseFontSize: '20px',
  baseLineHeight: 1.75,
  headerFontFamily: ['Oswald', 'sans-serif'],
  bodyFontFamily: ['PT Sans', 'sans-serif'],
  bodyColor: 'hsla(0,0%,0%,0.8)',
  headerColor: 'hsla(0,0%,0%,0.9)',
  headerWeight: 700,
  overrideThemeStyles: ({ rhythm }) => ({
    'a.gatsby-resp-image-link': {
      boxShadow: 'none',
    },
    h1: {
      marginTop: '0.5rem',
    },
    a: {
      background: 'linear-gradient(to bottom, #9EC6DF 0%, #9EC6DF 100%)',
      backgroundPosition: '0 100%',
      backgroundRepeat: 'repeat-x',
      backgroundSize: '3px 3px',
      color: '#000',
      textDecoration: 'none',
      paddingBottom: '.25em',
    },
    'a:hover, a:active': {
      color: '#6F90A6',
      textDecoration: 'none',
    },
    'p code': {
      fontSize: '.8rem',
    },
    'h1 code, h2 code, h3 code, h4 code, h5 code, h6 code': {
      fontSize: 'inherit',
    },
    'li code': {
      fontSize: '.8rem',
    },
  }),
}

const typography = new Typography(customTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
