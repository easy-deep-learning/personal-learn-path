import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import mainData from '../data/main.json'
import { PagesLayout } from '../layouts'
import { ContentEditor } from '../components'

const Home: NextPage = () => {

  const onSaveContent = (content: object) => {
    console.log("content: ", content); // eslint-disable-line
  }

  return (
    <PagesLayout>
      <Head>
        <title>{mainData.title}</title>
      </Head>
      <h2>Personal learn path</h2>
      <h3>Add source</h3>
      <ContentEditor onSave={onSaveContent} />
    </PagesLayout>
  )
}

export default Home

