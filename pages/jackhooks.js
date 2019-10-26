import Link from 'next/link'
import Router from 'next/router'

const jackhooks = () => {
  Router.events.on('routeChangeStart', (...args) => {
    console.log(`routeChangeStart---${args}`)
  })

  Router.events.on('routeChangeComplete', (...args) => {
    console.log(`routeChangeComplete---${args}`)
  })

  Router.events.on('beforeHistoryChange', (...args) => {
    console.log(`beforeHistoryChange---${args}`)
  })

  Router.events.on('routeChangeError', (...args) => {
    console.log(`routeChangeError---${args}`)
  })

  Router.events.on('hashChangeStart', (...args) => {
    console.log(`hashChangeStart---${args}`)
  })

  Router.events.on('hashChangeComplete', (...args) => {
    console.log(`hashChangeComplete---${args}`)
  })

  return (
    <>
      <Link href="/">
        <a>goto Index</a>
      </Link>
      <br />
      <Link href="#jack">
        <a>jackhash</a>
      </Link>
    </>
  )
}

export default jackhooks
