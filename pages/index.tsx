import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Banner from '../components/banner'

export default function Home() {

  const handleOnBannerBtnClick = () => {
    console.log("button clicked");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Coffee Connoisseur" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText="View your local coffee stores" handleOnClick={handleOnBannerBtnClick}/>
      </main>
    </div>
  )
}
