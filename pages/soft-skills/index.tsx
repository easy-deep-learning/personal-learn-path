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

const sectionName = 'soft-skills'
const pagesDirectory = path.join(process.cwd(), 'data', sectionName)
const pageTitle = `Soft skills`

export async function getStaticProps () {
  const allPagesData = await Promise.all(
    getAllFilesIds(pagesDirectory).map(async (fileId) => {
      const fileData = await parseMarkdownFile(path.join(pagesDirectory, `${fileId}.md`))
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

type SoftSkillsIndexPageProps = {
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

export default function SoftSkillsIndexPage ({ allPagesData }: SoftSkillsIndexPageProps) {
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
            <List.Item>{item.date} / <Link href={`${sectionName}/${item.pageid}`}>{item.title}</Link></List.Item>
          )}
        />

        {allPagesData.map(pageData => console.log(pageData))}
      </article>
    </PagesLayout>
  );
}
