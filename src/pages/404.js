import * as React from 'react'
import Link from '../components/elements/Link'
import Layout from '../components/Layout'
import '../styles/global.css'

const NotFoundPage = () => {
  return (
    <Layout>
      <main>
        <h1>Page not found</h1>
        <p>
          Sorry 😔, we couldn’t find what you were looking for.
          <br />
          <Link to="/">Go home</Link>.
        </p>
      </main>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
