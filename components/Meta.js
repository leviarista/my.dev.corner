import React from 'react'
import Head from 'next/head'

function Meta(props) {
    const { title, description } = props;
    return (
        <Head>
            <title>My Dev Corner {title && " | " + title}</title>
            <meta name="description" content={description ?? "CSS art of endangered species"} />
            <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default Meta
