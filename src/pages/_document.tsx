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
        
        {/* Aggressive preload hints for LCP resources */}
        <link
          rel="preload"
          as="image"
          href="/_next/image?url=https%3A%2F%2Fbmwpdsdev.wpenginepowered.com%2Fwp-content%2Fuploads%2F2024%2F11%2FBMW-M2-Competition-Autocross-435x245.webp&w=768&q=75"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="style"
          href="/_next/static/css/f6af0559a48d9d4b.css"
          fetchPriority="high"
        />
        
        {/* Critical resource preloading */}
        <link rel="modulepreload" href="/_next/static/chunks/framework-e180e6045d9bc50e.js" fetchPriority="high" />
        <link rel="modulepreload" href="/_next/static/chunks/main-e6ea4a87fee09e22.js" fetchPriority="high" />
        <link rel="modulepreload" href="/_next/static/chunks/pages/_app-3c32d962956b7702.js" />
        <link rel="modulepreload" href="/_next/static/chunks/apollo-b83334046c67ee31.js" />
        
        {/* Preload critical Apollo and vendor chunks */}
        <link rel="preload" as="script" href="/_next/static/chunks/apollo-b83334046c67ee31.js" />
        <link rel="preload" as="script" href="/_next/static/chunks/vendors-099e91bf844e74ef.js" />
        
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        
        {/* Critical CSS for initial render */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical font face for immediate text rendering */
            @font-face {
              font-family: "BMW TypeNext";
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url(/fonts/BMWTypeNextPro-Regular.woff2) format("woff2");
            }
            @font-face {
              font-family: "BMW TypeNext";
              font-style: normal;
              font-weight: 300;
              font-display: swap;
              src: url(/fonts/BMWTypeNextPro-Light.woff2) format("woff2");
            }
            
            /* Critical base styles */
            *,*::before,*::after{box-sizing:border-box}
            html{font-family:"BMW TypeNext",sans-serif;font-size:20px;margin:0;padding:0}
            body{margin:0;padding:0;background-color:#000;color:#fff;font-size:0.6rem}
            
            /* Critical layout styles for LCP */
            .hero-img-overlay{position:relative}
            .hero-img-overlay::before{content:"";position:absolute;bottom:0;z-index:1;display:none;height:100%;max-height:416px;width:100%;background:linear-gradient(to top,#000 22%,transparent)}
            @media (min-width:768px){
              .hero-img-overlay{position:absolute}
              .hero-img-overlay::before{display:block}
            }
            
            /* Critical typography */
            h1,h2{font-size:0.9rem;font-weight:300;line-height:1.2}
            @media (min-width:768px){h1,h2{font-size:1.25rem}}
            
            /* Critical container */
            .container{margin-left:auto;margin-right:auto;width:100%;max-width:1440px}
          `
        }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}