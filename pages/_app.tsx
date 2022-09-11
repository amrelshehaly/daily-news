// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core'
import { store } from '../src/store'
import { Provider } from 'react-redux'
import theme from '../styles/mui_theme'
import Layout from '../src/components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Layout>
          <CssBaseline />
          <Component {...pageProps} />
        </Layout>
      </MuiThemeProvider>
    </Provider>
  )
}

export default MyApp
