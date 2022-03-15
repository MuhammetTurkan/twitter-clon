import React from 'react'

import Layout from '../components/layout'
import useWindowSize from '../hooks/useWindowSize'
import CONST from '../constants'
import Sidebar from '../components/col-sidebar'
import Main from '../components/col-main'
import Extra from '../components/col-extra'

function HomePage() {
  const size = useWindowSize()
  return (
    <Layout>
      <Sidebar flat={size.width < CONST.DESKTOP_SİZE}>sidebar</Sidebar>
      <Main>{JSON.stringify(size)}</Main>
      {size.width > CONST.TABLET_SİZE && <Extra>extra</Extra>}
    </Layout>
  )
}

export default HomePage
