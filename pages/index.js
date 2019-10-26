import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Jack from '../components/jack'
import Link from 'next/link'
import Router from 'next/router'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <Jack>this is a component</Jack>

    <div>
      <Link href="/jackA">
        <a>goto jackA</a>
      </Link>
    </div>

    <div>
      <button
        onClick={() => {
          Router.push('/jackA')
        }}
      >
        goto jackA
      </button>
    </div>

    <div>
      <Link href="/jackwithparam?name=jack">
        <a>goto jackwithparam 1</a>
      </Link>
      <br />
      <Link href={{ pathname: '/jackwithparam', query: { name: 'jack' } }}>
        <a>goto jackwithparam 2</a>
      </Link>
      <br />
      <button
        onClick={() => {
          Router.push('/jackwithparam?name=jack')
        }}
      >
        goto jackwithparam 3
      </button>
      <br />
      <button
        onClick={() => {
          Router.push({ pathname: '/jackwithparam', query: { name: 'jack' } })
        }}
      >
        goto jackwithparam 4
      </button>
      <br />
      <Link href="/jackhooks">
        <a>goto jackhooks</a>
      </Link>
      <br />
      <Link href="/jackasyncrequest">
        <a>goto jackasyncrequest</a>
      </Link>
    </div>

    <div className="hero">
      <h1 className="title">Welcome to Next.js!</h1>
      <p className="description">
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>

      <div className="row">
        <a href="https://nextjs.org/docs" className="card">
          <h3>Documentation &rarr;</h3>
          <p>Learn more about Next.js in the documentation.</p>
        </a>
        <a href="https://nextjs.org/learn" className="card">
          <h3>Next.js Learn &rarr;</h3>
          <p>Learn about Next.js by following an interactive tutorial!</p>
        </a>
        <a
          href="https://github.com/zeit/next.js/tree/master/examples"
          className="card"
        >
          <h3>Examples &rarr;</h3>
          <p>Find other example boilerplates on the Next.js GitHub.</p>
        </a>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
