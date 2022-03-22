import React from 'react'

import Layout from '../components/layout'
import ThemeSelect from '../components/theme-select'
import useWindowSize from '../hooks/useWindowSize'

function MorePage() {
  const size = useWindowSize()
  return (
    <Layout>
      <ThemeSelect />
    </Layout>
  )
}

export default MorePage
