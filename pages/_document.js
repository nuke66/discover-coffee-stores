import Document, { Head, Html, Main, NextScript } from "next/document";


class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
            {/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link */}
            <link rel="preload" href="/fonts/IBMPlexSans-Bold.tff" as="font" crossOrigin="anonymous"></link>
            <link rel="preload" href="/fonts/IBMPlexSans-Italic.tff" as="font" crossOrigin="anonymous"></link>
            <link rel="preload" href="/fonts/IBMPlexSans-Regular.tff" as="font" crossOrigin="anonymous"></link>
            <link rel="preload" href="/fonts/IBMPlexSans-SemiBold.tff" as="font" crossOrigin="anonymous"></link>
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