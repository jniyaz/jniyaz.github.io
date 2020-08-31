import Document, { Html, Head, Main, NextScript } from 'next/document'

const prefix = "/niyaz-blog";
class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <link rel="icon" type="image/png" href={prefix + '/favicon.png'} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument