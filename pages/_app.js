import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../lib/theme';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core';
import withReduxStore from '../lib/with-redux-store';
import { Provider } from 'react-redux';

class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const theme = createMuiTheme({
      palette: {
        type: 'dark',
        background: {
          default: '#303030',
        },
      },
    });

    const { Component, pageProps, reduxStore } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Provider store={reduxStore}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
export default withReduxStore(MyApp);
