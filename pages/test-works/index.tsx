import React from 'react'
import Head from 'next/head'
import {
  parseISO,
  getDate,
  getMonth,
  getYear,
} from 'date-fns'

import { PagesLayout } from '../../layouts'
import getAllFilesIds from '../../lib/getAllFilesIds'
import parseMarkdownFile from '../../lib/parseMarkdownFile'
import path from 'path'

const memoryDirectory = path.join(process.cwd(), 'data', 'test-works')
const pageTitle = `Тестовые задания`

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

type TextWorksPageProps = {
  allPagesData: [
    {
      title: string
      contentHtml: string
    }
  ]
}

export default function TextWorksPage ({ allPagesData }: TextWorksPageProps) {
  return (
    <PagesLayout>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {/* @ts-ignore */}
      <article>
        <h1 className="page__header">{pageTitle}</h1>
        {allPagesData.map(pageData => console.log(pageData))}
      </article>
    </PagesLayout>
  )
}
