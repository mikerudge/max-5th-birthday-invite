import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
	return (
		<Html>
			<Head>
				<link
					href='https://fonts.googleapis.com/css2?family=Inter&display=optional'
					rel='stylesheet'
				/>

				<meta name='title' content="Max's 5th birthday party invite" />
				<meta
					name='description'
					content='Max is turning 5 so we are having a party on 9th October. Come join us. '
				/>

				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://max-turns-5.netlify.com/' />
				<meta property='og:title' content="Max's 5th birthday party invite" />
				<meta
					property='og:description'
					content='Max is turning 5 so we are having a party on 9th October. Come join us. '
				/>
				<meta property='og:image' content='public/meta.png' />

				<meta property='twitter:card' content='summary_large_image' />
				<meta
					property='twitter:url'
					content='https://max-turns-5.netlify.com/'
				/>
				<meta
					property='twitter:title'
					content="Max's 5th birthday party invite"
				/>
				<meta
					property='twitter:description'
					content='Max is turning 5 so we are having a party on 9th October. Come join us. '
				/>
				<meta property='twitter:image' content='public/meta.png' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
