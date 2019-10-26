import React from 'react'
import Link from 'next/link'
import Route from 'next/router'

export default () => (
  <>
    <div>this is jack A page</div>
    <Link href="/">
      <a>
        <span>goto index</span>
      </a>
    </Link>
  </>
)
