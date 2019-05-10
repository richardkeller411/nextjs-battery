import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Next JS Awesome Kit</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
