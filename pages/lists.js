import React from 'react'

import Layout from '../components/layout'
import useWindowSize from '../hooks/useWindowSize'

function ListsPage() {
  const size = useWindowSize()
  return <Layout>Lists</Layout>
}

export default ListsPage
