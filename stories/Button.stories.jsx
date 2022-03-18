import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import Button from '../components/button'
import NavButton from '../components/nav-button'
import Navigation from '../components/navigation'
import { Home } from '../components/icons'
import TextTitle from '../components/text-title'
import ThemeButton from '../components/theme.button'
import Stack from '../components/stack'
export default {
  title: 'Button',
  decorators: [withKnobs]
}

export const baseButton = () => <Button>Buttons</Button>
export const theme = () => (
  <Stack column>
    <ThemeButton>Tweet</ThemeButton>
    <ThemeButton full>Tweet Full</ThemeButton>
    <ThemeButton full big>
      Tweet Big
    </ThemeButton>
  </Stack>
)
export const NavvButton = () => (
  <NavButton>
    <Home />
    <TextTitle>Home</TextTitle>{' '}
  </NavButton>
)
export const Nav = () => {
  const flat = boolean('Flat', false)
  return <Navigation flat={flat} />
}
