import React from 'react'
import Head from 'next/head'
import {
  Header,
  Footer,
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

      <Footer />
    </>
  )
}
