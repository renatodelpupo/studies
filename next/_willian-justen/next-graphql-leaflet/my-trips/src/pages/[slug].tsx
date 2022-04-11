import { GetStaticProps } from 'next'
import client from 'graphql/client'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries'
import { useRouter } from 'next/dist/client/router'
import PageTemplate, { PageTemplateProps } from 'templates/Pages'

export default function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter()

  // return a loading while the template is being created
  if (router.isFallback) return null

  return <PageTemplate heading={heading} body={body} />
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug },
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`,
  })

  if (!page) return { notFound: true }

  return {
    props: {
      body: page.body.html,
      heading: page.heading,
    },
  }
}

// getStaticPaths => generate URLs on build time
// getStaticProps => get page data (props) on build time / static
// getServerSideProps => get page data (props) on run time / every request / bundle only on server
// getInitialProps => get page data (props) on run time / every request / bundle available on client / hydrate
