import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Suman's Portfolio</title>
        <meta name="Portfolio Page" content="A web page to showcase my skillset to the interested audience" />
      </Head>

      <h1>Lets build a portfolio</h1>
     
    </div>
  )
}
