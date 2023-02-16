import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import {
  createTheme,
  ThemeProvider,
} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { theme } from '../theme.js'

export default function MyApp(props) {
  const { Component, pageProps } = props
  const customTheme = createTheme(theme)
  React.useEffect(() => {
    const jssStyles = document.querySelector(
      '#jss-server-side',
    )
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <ThemeProvider theme={customTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}
