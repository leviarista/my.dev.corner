import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                {/* <title>My Dev Corner</title>
                <meta name="description" content="The dev's favorite corner" />
                <link rel="icon" href="/favicon.ico" /> */}

                {/* Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&display=swap" rel="preload" as="style" />
                <link href="https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}