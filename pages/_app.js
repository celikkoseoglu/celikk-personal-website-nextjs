import "../globals.sass";
import { useEffect } from "react";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const prefersColorSchemeWatcher = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    // If the browser doesn't support prefers-color-scheme
    // then don't call addEventListener on a null object
    if (prefersColorSchemeWatcher.matches) {
      prefersColorSchemeWatcher.addEventListener("change", () => {
        const favicon = document.querySelector('link[rel="icon"]');
        favicon.href = null;
        favicon.href = "/favicon.svg";
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Çelik Köseoğlu</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Hey, this is my personal website. You can take a look at
          my portfolio, download my CV and see how you can contact me!"
          data-react-helmet="true"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Çelik Köseoğlu" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="alternate icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="alternate icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#111111" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#111111" />
      </Head>
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
