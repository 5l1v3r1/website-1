import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
                    />
                    {/* <link rel="icon" type="image/x-icon" href="../static/favicon.ico" /> */}
                    <link type='stylesheet' href='../node_modules/font-awesome/css/font-awesome.css'/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;
