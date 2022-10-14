import path from 'path'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {
  parseISO,
  getDate,
  getMonth,
  getYear,
} from 'date-fns'

import { List } from 'antd';

import { PagesLayout } from '../../layouts'
import getAllFilesIds from '../../lib/getAllFilesIds'
import parseMarkdownFile from '../../lib/parseMarkdownFile'


const memoryDirectory = path.join(process.cwd(), 'data', 'infrastructure')
const pageTitle = `Infrastructure`

export async function getStaticProps () {
  const allPagesData = await Promise.all(
    getAllFilesIds(memoryDirectory).map(async (fileId) => {
      const fileData = await parseMarkdownFile(path.join(memoryDirectory, `${fileId}.md`))
      // It should be extracted to utils
      const dateParsedISO = parseISO(fileData.meta.date)

      return {
        pageid: `${fileId}`,
        title: fileData.meta.title,
        date: fileData.meta.date,
        date_parsed: {
          year: getYear(dateParsedISO),
          month: getMonth(dateParsedISO),
          day: getDate(dateParsedISO),
        }
      }
    }),
  )

  return {
    props: {
      allPagesData,
    },
  }
}

type InfrastructureIndexPageProps = {
  allPagesData: [
    {
      title: string
      date: string
      date_parsed: {
        day: number
        month: number
        year: number
      }
      pageid: string
      contentHtml: string
    }
  ]
}

export default function InfrastructureIndexPage ({ allPagesData }: InfrastructureIndexPageProps) {
  return (
    <PagesLayout>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {/* @ts-ignore */}
      <article>
        <h1 className="page__header">{pageTitle}</h1>
        <List
          bordered
          dataSource={allPagesData}
          renderItem={item => (
            <List.Item>{item.date} / <Link href={`soft-skills/${item.pageid}`}><a>{item.title}</a></Link></List.Item>
          )}
        />

        {allPagesData.map(pageData => console.log(pageData))}
      </article>
    </PagesLayout>
  )
}
