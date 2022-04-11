import client from 'graphql/client'
import { GET_PAGES } from 'graphql/queries'
import AboutTemplate from 'templates/About'

export default function AboutPage() {
  return <AboutTemplate />
}

export const getStaticProps = async () => {
  const { pages } = await client.request(GET_PAGES)

  console.log(pages)

  return {
    props: {},
  }
}

// getStaticPaths => generate URLs on build time
// getStaticProps => get page data (props) on build time / static
// getServerSideProps => get page data (props) on run time / every request / bundle only on server
// getInitialProps => get page data (props) on run time / every request / bundle available on client / hydrate
