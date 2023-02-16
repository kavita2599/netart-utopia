let white = '#fff'
export var theme = {
  palette: {
    primary: {
      main: '#00D6F7',
      white: white,
      black: '#000',
    },
  },
  typography: {
    h1: {
      fontSize: '3.8rem',
      lineHeight: '4.5rem',
      fontWeight: 'bold',
      color: white,
    },
    h2: {
      fontSize: '2.5rem',
      lineHeight: '4rem',
      color: white,
    },
    h3: {
      fontSize: '2rem',
      lineHeight: '3.5rem',
      color: white,
    },
    subtitle: {
      fontSize: '1.8rem',
      lineHeight: '3rem',
      color: white,
    },
    p: {
      fontSize: '1.3rem',
      lineHeight: '2.5rem',
      color: white,
    },
    '@media (max-width:600px)': {
      h2: {
        fontSize: '2rem',
        lineHeight: '3.8rem',
      },
      h3: {
        fontSize: '1.8rem',
        lineHeight: '3rem',
      },
      subtitle: {
        fontSize: '1.3rem',
        lineHeight: '2.5rem',
      },
    },
  },
  button: {
    primary: {
      background: `#00D6F7`,
      padding: '10px 30px',
    },
  },
}
