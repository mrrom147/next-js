import Head from 'next/head';
import Layout from '../components/layout';
import { Button } from 'reactstrap';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home page</title>
      </Head>

      <div>
      <Button color="danger">Danger!</Button>
      </div>
    </Layout>
  )
}
