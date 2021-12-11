import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <div>
      <Head>
        <title>About</title>
      </Head>
      <h1>About</h1>
      <Link href='/'>
        Go to homepage
      </Link>
      <div>Something about me</div>
    </div>
  </Layout>
)
