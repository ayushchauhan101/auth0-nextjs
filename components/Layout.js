import Head from 'next/head'
import Header from './Header'

const Layout = ({ user, loading = false, children }) => {
  return (
    <>
      <Head>
        <title>Next.js with Auth0</title>
      </Head>

      <Header user={ user } loading={ loading } />

      <main>
        <div className="container">{ children }</div>
      </main>
    </>
  )
}

export default Layout