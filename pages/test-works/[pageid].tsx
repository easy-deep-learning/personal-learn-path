import Head from 'next/head'
import path from 'path'
import { PagesLayout } from '../../layouts'
import getAllFilesIds from '../../lib/getAllFilesIds'
import parseMarkdownFile from '../../lib/parseMarkdownFile'

const pagesDirectory = path.join(process.cwd(), 'data', 'test-works')

export function getStaticPaths () {
  const paths = getAllFilesIds(pagesDirectory).map(path => ({ params: { pageid: path } }))

  return {
    paths,
    fallback: false,
  }
}

type GetStaticPropsType = {
  params: {
    pageid: string
  }
}

export async function getStaticProps ({ params }: GetStaticPropsType) {
  const fileData = await parseMarkdownFile(path.join(pagesDirectory, `${params.pageid}.md`))

  return {
    props: {
      pagesData: {
        title: fileData.meta.title,
        date: fileData.meta.date,
        html: fileData.html,
      },
    },
  }
}

type TestWorkPageType = {
  pagesData: {
    date: string
    title: string
    html: string
  }
}

export default function TestWorkPage ({ pagesData }: TestWorkPageType) {
  return (
    <PagesLayout>
      <Head>
        <title>{pagesData.date}: {pagesData.title}</title>
      </Head>
      <article>
        <h1>{pagesData.date}: {pagesData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: pagesData.html }} />
      </article>
    </PagesLayout>
  )
}
