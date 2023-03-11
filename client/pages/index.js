import Head from 'next/head'
import BrowseTopics from '../components/sections/BrowseTopics'
import TopPicks from '../components/sections/TopPicks'
import Layout from '../components/wrappers/Layout'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Blogarithm | Home for honest informations</title>
        <meta name="description" content="We are a bunch of computer science graduates, spreading genuine and honest infomation to help the world." />
        <meta name="google-site-verification" content="BnZGvfq4s8A-441A4gCFBZ_vDVRby0kZFDAETf9PYTU" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <BrowseTopics />
        <TopPicks />
      </Layout>
    </div>
  )
}
