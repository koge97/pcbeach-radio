import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';

import { initializeTheme } from '@/utils/theme';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initializeTheme();
  }, []);
  
  return <Component {...pageProps} />
}
