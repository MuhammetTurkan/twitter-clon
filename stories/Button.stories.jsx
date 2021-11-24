import React from 'react'
import Button from '../components/button'
import NavButton from '../components/nav-button'
import Navigation from '../components/navigation'
import { Home } from '../components/icons'
import TitleBold from '../components/title-bold'
export default {
  title: 'Button'
}

export const baseButton = () => <Button>Buttons</Button>
export const NavvButton = () => (
  <NavButton>
    <Home />
    <TitleBold>Home</TitleBold>{' '}
  </NavButton>
)
export const Nav = () => <Navigation selectedKey="home" />
