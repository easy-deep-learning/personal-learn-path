import React from 'react'
import type { NextPage } from 'next'
import { Col, Row } from 'antd'
import Head from 'next/head'

import mainData from '../data/main.json'
import { Header, Footer } from '../components'

const Home: NextPage = () => {
  return (
    <>
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
      <Footer />
    </>
  )
}

export default Home

