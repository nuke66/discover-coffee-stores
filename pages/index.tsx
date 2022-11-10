import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.scss'
import Banner from '../components/banner'
import { useRouter } from 'next/router'
import Card from '../components/card'

export default function Home() {

  const router = useRouter();
  console.log(router);

  const handleOnBannerBtnClick = () => {
    console.log("button clicked");
    router.push('/coffee-store');
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
        <Card 
          name="Darkhorse coffee" 
          imgUrl="https://via.placeholder.com/260x160/0000FF.png" 
          href="/coffee-store/darkhorse" />
      </main>
    </div>
  )
}
