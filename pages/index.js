import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from '@/components/banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const handleBannerClick = () => {
    
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Discover Coffee</title>
        <meta name="description" content="Discover coffee near you..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* <h1 className={styles.title} >Coffee Connoisseur</h1> */}
        <Banner buttonText={"View stores nearby"} handleOnClick={handleBannerClick}  />
      </main>
    </div>
  )
}
