import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-NR4TEQXZ4E`}
      />

      <Script id="gtag_loader" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('ts', new Date());
            gtag('config', 'G-NR4TEQXZ4E', {
              page_path: window.location.pathname,
            });
                `}
      </Script>

      <Script
        id="Adsense-id"
        data-adbreak-test="on"
        data-ad-client="client=ca-pub-4395676148568756"
        async={true}
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4395676148568756"
        crossOrigin="anonymous"
        onError={(e) => {
          console.error("Algo esta fallando en el script. No pudo cargarse ", e);
        }}
      />
      
      <Component {...pageProps} />
    </>
  );
}
