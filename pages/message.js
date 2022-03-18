import React from 'react'

import Layout from '../components/layout'
import useWindowSize from '../hooks/useWindowSize'

function MessagePage() {
  const size = useWindowSize()
  return <Layout>Message</Layout>
}

export default MessagePage
