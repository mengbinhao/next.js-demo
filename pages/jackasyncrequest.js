import { withRouter } from 'next/router'
import axios from 'axios'

const asyncRequest = () => {
  return (
    <>
      <div>async request</div>
      <div></div>
    </>
  )
}

asyncRequest.getInitialProps = async () => {
  const promise = new Promise(resolve => {
    //axios
    setTimeout(() => {
      resolve([1, 2, 3])
    }, 1000)
  })
  //显示根据返回的属性名上面进行解构
  return await promise
}

export default withRouter(asyncRequest)
