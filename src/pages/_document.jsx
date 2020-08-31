import Document, { Html, Head, Main, NextScript } from 'next/document'

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <link rel="icon" type="image/png" href={process.env.NEXT_PUBLIC_BASE_PATH + '/favicon.png'} />
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