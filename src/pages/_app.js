import "../styles/globals.css";
import { getCookie } from "cookies-next";
import Script from "next/script";

const isProduction = process.env.NODE_ENV === "production";

export default function App({ Component, pageProps }) {
  const consent = getCookie("localConsent");
  return (
    <>
      {isProduction && (
        <>
          <Script
            async
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-1B3C3W4V0P"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied'
              });
   
              gtag('config', 'G-1B3C3W4V0P');
          `}
          </Script>
          {consent === true && (
            <Script
              id="consupd"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
            gtag('consent', 'update', {
              'ad_storage': 'granted',
              'analytics_storage': 'granted'
            });
          `,
              }}
            />
          )}
        </>
      )}
      <Component {...pageProps} />;
    </>
  );
}
