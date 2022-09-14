// import '../styles/globals.css'
import React from 'react'
import type { AppProps } from 'next/app'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core'
import { wrapper } from '../src/store'
import theme from '../styles/mui_theme'
import Layout from '../src/components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <Layout>
        <CssBaseline />
        <Component {...pageProps} />
      </Layout>
    </MuiThemeProvider>
  )
}

export default wrapper.withRedux(MyApp)
