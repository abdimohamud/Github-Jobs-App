import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='application-name' content='GitHub Jobs Clone' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:creator' content='@nopocketchange' />
          <meta property='og:type' content='website' />
          <meta name='author' content='Abdi Mohamud' />
          <meta property='og:site_name' content='GitHub Jobs Clone' />
          <meta name='theme-color' content='#5964E0' />
          <meta
            name='description'
            content='A Github Jobs application using the API that fetches job postings.'
          />
          <meta property='og:title' content='GitHub Jobs Clone' />
          <meta
            property='og:description'
            content='A Github Jobs application using the API that fetches job postings.'
          />
          <meta property='og:url' content='https://github-jobs-app-ten.vercel.app' />
          <meta property='twitter:title' content='GitHub Jobs' />
          <meta
            property='twitter:description'
            content='A Github Jobs application using the API that fetches job postings.'
          />
          <meta property='twitter:url' content='https://github-jobs-app-ten.vercel.app' />
          <meta
            property='og:image'
            content='https://github-jobs-app-ten.vercel.app/preview.jpg'
          />
          <meta
            property='twitter:image'
            content='https://github-jobs-app-ten.vercel.app/preview.jpg'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&display=swap'
            rel='stylesheet'
          />
          <script
            src='https://cdn.usefathom.com/script.js'
            data-site='ZMAOUWQD'
            defer
          ></script>
          <script
      src="https://use.fontawesome.com/releases/v5.15.1/js/all.js"
      defer
    ></script>
          <script
            async
            defer
            data-domain='github-jobs-app-ten.vercel.app'
            src='https://plausible.io/js/plausible.js'
          ></script>
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
