import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1B3C3W4V0P"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-1B3C3W4V0P');
          `}
        </Script>
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1B3C3W4V0P', {
                page_path: window.location.pathname,
              });
            `,
          }}
        /> */}
      </Head>
      <body
        style={{
          backgroundColor:
            "linear-gradient(0deg, rgb(238, 210, 204), rgb(255, 255, 255))",
        }}
      >
        <Main />
        <NextScript />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=G-1B3C3W4V0P`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </Html>
  );
}
