import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          HOMEfghy
          <button onClick={() => {
            axios({
              method: 'GET',
              url: '/api/titi'
            }).then((rep) => console.log(rep))
            .catch((err) => console.warn(err))
          }}>call api</button>
          </div>
                </main>
    </>
  )
}