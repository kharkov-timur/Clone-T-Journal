import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import 'macro-css';

import { theme } from '../theme';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </MuiThemeProvider>
  );
}

export default MyApp;
