import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { App } from '../components'
const queryCache = new QueryCache()
 

function MyApp({ Component, pageProps }: AppProps) {
 
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <App>
        <Head><title>Github Jobs</title><link rel="shortcut icon" href="/favicon.ico"/></Head>
        <Component {...pageProps} />
      </App>
    </ReactQueryCacheProvider>
  )
}

export default MyApp
