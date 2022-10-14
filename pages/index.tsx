import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import mainData from '../data/main.json'
import { PagesLayout } from '../layouts'
import { Header, Footer } from '../components'

const Home: NextPage = () => {
  return (
    <PagesLayout>
      <Head>
        <title>{mainData.title}</title>
      </Head>
      <h2>Personal learn path</h2>
    </PagesLayout>
  )
}

export default Home

