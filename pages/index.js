import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Alex Mann</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="This site is under construction (obviously)" />
        <a href="https://quiet-jelly-feeb71.netlify.app/">
          ETA-Checker
        </a>
      </main>

      <Footer />
    </div>
  )
}
