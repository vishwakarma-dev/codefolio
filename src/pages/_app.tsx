import "../styles/globals.css";

import AppLayout from "@app/Layout/AppLayout";
import { AppProviders } from "@app/providers/AppProviders";
import { AppCacheProvider } from "@mui/material-nextjs/v15-pagesRouter";
import type { AppProps } from "next/app";

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
