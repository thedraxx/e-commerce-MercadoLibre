import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { lightTheme } from '../themes';
import { SideMenuProvider } from '../context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SideMenuProvider>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </SideMenuProvider>

  )
}

export default MyApp
