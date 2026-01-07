import "@app/styles/globals.css";

import type { AppProps } from 'next/app';
import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter';
import { AppProviders } from '@app/providers/AppProviders';
import AppLayout from '@app/Layout/AppLayout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider {...pageProps}>
      <AppProviders>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </AppProviders>
    </AppCacheProvider>
  );
}
