import Head from 'next/head'
import Image from 'next/image'
import Gallery from '../components/Gallery'
import VideoJS from '../components/VideoJs'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Golf turnir</title>
        <meta name="description" content="" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <div className="hidden md:block fixed h-full w-container left-1/2 top-0 transform -translate-x-1/2 z-10">
        <img src="/img/palica.png" className="w-36 absolute bottom-24 -left-52" />
        <img src="/img/zogica.png" className="w-12 absolute bottom-96 -right-32" />
      </div>

      <main className="container flex flex-col items-center relative z-20">
        <div className="flex flex-col items-center w-64 mt-16 md:mt-40">
          <img src="/img/logo.png" className="w-36 mb-12" />
          <img src="/img/text.png" className="w-96" />
        </div>
        <VideoJS />
        <div className="mb-12">
          <Gallery number={228} />
        </div>
      </main>

      <footer className="flex items-center justify-center py-12">
        <img src="/img/pop-voyo.png" />
      </footer>
    </div>
  )
}
