import 'bootstrap/dist/css/bootstrap-grid.min.css'
import '../styles/globals.scss'
import '@iconscout/unicons/css/line.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
