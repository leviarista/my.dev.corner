import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				{/* Fonts */}
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
				<link
					href='https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&display=swap'
					rel='preload'
					as='style'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&display=swap'
					rel='stylesheet'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&display=swap'
					rel='stylesheet'
				/>
				<script
					id='cunter.dev-analytics-init'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{
						__html: `if(!sessionStorage.getItem("_swa")&&document.referrer.indexOf(location.protocol+"//"+location.host)!== 0){fetch("https://counter.dev/track?"+new URLSearchParams({referrer:document.referrer,screen:screen.width+"x"+screen.height,user:"levi.mdc",utcoffset:"-5"}))};sessionStorage.setItem("_swa","1");`,
					}}
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
