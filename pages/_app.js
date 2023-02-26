/** @jsxRuntime classic */
/**  @jsx jsx */
import { jsx } from 'theme-ui'
import NextApp from 'next/app'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme' // t
import "../public/bootstrap.css"
import "../public/animate.css"
import "../public/globals.css"
import "../public/template.css"
import "../public/swiper-bundle.css"

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
