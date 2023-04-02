/* eslint-disable @next/next/next-script-for-ga */
import "../styles/globals.css";
import { useState } from "react";

import { getCookie } from "cookies-next";
import Head from "next/head";

import Consent from "@/components/consent";

const isProduction = process.env.NODE_ENV === "production";

export default function App({ Component, pageProps }) {
  const [consent, setConsent] = useState(true);

  const consentCookie = getCookie("localConsent");
  return (
    <>
      <Head>
        {isProduction && (
          <>
            <script
              async
              // strategy="beforeInteractive"
              src="https://www.googletagmanager.com/gtag/js?id=G-1B3C3W4V0P"
            />
            <script
              id="google-analytics"
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied'
              });
   
              gtag('config', 'G-1B3C3W4V0P');
          `,
              }}
              // strategy="beforeInteractive"
            ></script>
            {(consent === true || consentCookie === true) && (
              <script
                id="consupd"
                // strategy="beforeInteractive"
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
      </Head>
      <Component {...pageProps} />;
      <Consent consent={consent} setConsent={setConsent} />
    </>
  );
}
