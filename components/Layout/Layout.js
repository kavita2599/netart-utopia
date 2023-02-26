/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React, { useEffect } from 'react'
import PageRevealer from './PageRevealer'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children, sections, bg, navbg }) => {
  return (
    <div id='main'>
      <Navbar sections={sections} bg={navbg} />
      {/* <PageRevealer /> */}
      <div sx={{ ...bg }}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
