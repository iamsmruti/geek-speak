import '../styles/globals.css';
import '../styles/loader.css';
import '../styles/GoogleButton.css'
import { useState, useEffect } from 'react';

import { createTheme, ThemeProvider } from '@mui/material';
import { red } from '@mui/material/colors';

import Loading from '../components/atoms/Loading';

import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ADD8E6',
    },
    secondary: red,
    mode: 'dark'
  },
  typography: {
    fontFamily: 'Poppins',
    fontWeightLight: 200,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    fontWeightBold: 600,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 915,
      lg: 1200,
      xl: 1536,
    },
  },
});

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        {!loading ? <Component {...pageProps} /> : <Loading />}
      </ThemeProvider>
      <Analytics />
    </>
  );
}

export default MyApp;
