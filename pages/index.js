import Head from 'next/head'
import Covid from '../components/CovidData'
import css from '../src/css/pages/index.module.scss'

export default function Home() {
  return (
    <div className={css.container}>
      <Head>
        <title>Covid 19 - Brazil</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={css.title}>
        Covid 19 - Brazil
        </h1>

        <p className={css.description}>
        Analysis Covid 19 vs Notary Pulmonary complications deaths by API <a href="https://brasil.io/api/dataset/covid19/obito_cartorio/data/">Brasil.io</a><br/>
        Respecting 14 days of delay of the registry offices
        </p>

        <div className={css.grid}>
          <Covid />
        </div>
      </main>

      <footer>
        <a
          href="https://maicon-esteves.tk"
          target="_blank"
        >
          Powered by <img src="/maicon.png" className={css.authorIMG} alt="Maicon photo" /> Maicon Esteves
        </a>
      </footer>
    </div>
  )
}
