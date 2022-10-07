import React from 'react'
import Head from 'next/head'
import {
  Header,
} from '../../components'
import mainData from '../../data/main.json'

import pageLayoutStyles from './pageLayout.module.css'

type PagesLayoutProps = {
  children: React.ReactNode
}

export default function PagesLayout ({ children }: PagesLayoutProps) {
  return (
    <>
      <div className={pageLayoutStyles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="yandex-verification" content="4c16862f72d07481" />
          <meta
            name="description"
            content={mainData.description}
          />
          <meta name="og:title" content={mainData.title} />
          <title>{mainData.title}</title>
        </Head>

        <Header />

        <main>{children}</main>
      </div>

      <footer className="footer">
        <span className="copyright footer__item">
          2001 — {(new Date()).getFullYear()},{' '}
          Учу программирование
        </span>
        <span
          className="feedback footer__item">
          Пишите
        </span>
        <span className="footer__item">Открытые исходники:
          <a
            href="https://github.com/easy-deep-learning/personal-learn-path"
            target="_blank"
            rel="noreferrer"
          >github.com/easy-deep-learning/personal-learn-path</a>
        </span>
      </footer>
    </>
  )
}
