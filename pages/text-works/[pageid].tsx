import Head from 'next/head'
import path from 'path'
import { PagesLayout } from '../../layouts'
import getAllFilesIds from '../../lib/getAllFilesIds'
import parseMarkdownFile from '../../lib/parseMarkdownFile'

const pagesDirectory = path.join(process.cwd(), 'data', 'text-works')

export function getStaticPaths () {
  const paths = getAllFilesIds(pagesDirectory).map(path => ({ params: { slug: path } }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps ({ params }) {
  const fileData = await parseMarkdownFile(path.join(pagesDirectory, `${params.slug}.md`))
  return {
    props: {
      allPagesData: {
        title: fileData.meta.title,
        date: fileData.meta.date,
        html: fileData.html,
      },
    },
  }
}

export default function MemoryPage ({ allPagesData }) {
  return (
    <PagesLayout>
      <Head>
        <title>{allPagesData.date}: {allPagesData.title}</title>
      </Head>
      <article>
        <h1>{allPagesData.date}: {allPagesData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: allPagesData.html }} />
      </article>
    </PagesLayout>
  )
}
