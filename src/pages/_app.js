import "../styles/globals.css";
import Script from "next/script";

const isProduction = process.env.NODE_ENV === "production";

export default function App({ Component, pageProps }) {
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

              gtag('config', 'G-1B3C3W4V0P');
          `}
          </Script>
        </>
      )}
      <Component {...pageProps} />;
    </>
  );
}
