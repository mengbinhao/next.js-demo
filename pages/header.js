import Head from 'next/head'
import '../public/test.css'
import { Button } from 'antd'

export default () => {
  return (
    <>
      <Head>
        <title>jack</title>
      </Head>
      <div>header demo</div>
      <Button>antd button</Button>
    </>
  )
}
