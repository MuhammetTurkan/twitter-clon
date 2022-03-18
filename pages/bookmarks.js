import React from 'react'

import Layout from '../components/layout'
import useWindowSize from '../hooks/useWindowSize'

function ExplorePage() {
  const size = useWindowSize()
  return <Layout>Bookmarks</Layout>
}

export default ExplorePage
