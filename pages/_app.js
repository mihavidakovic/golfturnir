import 'tailwindcss/tailwind.css'
import '../styles/main.scss'
import SimpleReactLightbox from 'simple-react-lightbox'

function MyApp({ Component, pageProps }) {
  return (
    <SimpleReactLightbox>
          <Component {...pageProps} />
    </SimpleReactLightbox>
  )
}

export default MyApp
