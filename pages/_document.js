import Document, { Head, Html, Main, NextScript } from "next/document";
import Link from "next/link";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
            <link rel="preload" hefre="/fonts/IBMPlexSans-Bold.tff" as="font" crossOrigin="anonymous"></link>
            <link rel="preload" hefre="/fonts/IBMPlexSans-Italic.tff" as="font" crossOrigin="anonymous"></link>
            <link rel="preload" hefre="/fonts/IBMPlexSans-Regular.tff" as="font" crossOrigin="anonymous"></link>
            <link rel="preload" hefre="/fonts/IBMPlexSans-SemiBold.tff" as="font" crossOrigin="anonymous"></link>
        </Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;