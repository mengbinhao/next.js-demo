import Link from 'next/link'
import { withRouter } from 'next/router'

const page = ({ router }) => {
  return (
    <>
      <div> {router.query.name} with params</div>
      <Link href="/">
        <a>goto Index</a>
      </Link>
    </>
  )
}

export default withRouter(page)
