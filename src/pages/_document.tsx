import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Critical font preloading */}
        <link
          rel="preload"
          href="/fonts/BMWTypeNextPro-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/BMWTypeNextPro-Light.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        
        {/* DNS and connection optimizations */}
        <link rel="dns-prefetch" href="https://bmwpdsdev.wpenginepowered.com" />
        <link rel="preconnect" href="https://bmwpdsdev.wpenginepowered.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://www.googleapis.com" crossOrigin="" />
        
        {/* Resource hints for critical scripts */}
        <link rel="modulepreload" href="/_next/static/chunks/framework-e180e6045d9bc50e.js" />
        <link rel="modulepreload" href="/_next/static/chunks/main-e6ea4a87fee09e22.js" />
        
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}