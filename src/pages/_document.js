import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <body
        style={{
          backgroundColor:
            "linear-gradient(0deg, rgb(238, 210, 204), rgb(255, 255, 255))",
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
