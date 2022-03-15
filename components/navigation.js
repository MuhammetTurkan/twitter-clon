import React from 'react'

import NavButton from './nav-button'
import {
  Twitter,
  Home,
  Explore,
  Notifications,
  Message,
  Bookmark,
  Lists,
  More,
  Profile
} from './icons'
import TextTitle from './text-title'

import styles from './navigation.module.css'
function Navigation({ flat = false, selectedKey }) {
  return (
    <button type="button" className={styles.button}>
      <nav className={styles.nav}>
        <NavButton>
          <Twitter />
        </NavButton>
        <NavButton selected={selectedKey === 'home'}>
          <Home />
          <TextTitle>Home</TextTitle>
        </NavButton>
        <NavButton selected={selectedKey === 'explore'}>
          <Explore />
          <TextTitle>Explore</TextTitle>
        </NavButton>
        <NavButton notify={17} selected={selectedKey === 'notification'}>
          <Notifications />
          <TextTitle>Natifications</TextTitle>
        </NavButton>
        <NavButton selected={selectedKey === 'message'}>
          <Message />
          <TextTitle>Message</TextTitle>
        </NavButton>
        <NavButton selected={selectedKey === 'bookmarks'}>
          <Bookmark />
          <TextTitle>Bookmarks</TextTitle>
        </NavButton>
        <NavButton selected={selectedKey === 'lists'}>
          <Lists />
          <TextTitle>Lists</TextTitle>
        </NavButton>
        <NavButton selected={selectedKey === 'profile'}>
          <Profile />
          <TextTitle>Profile</TextTitle>
        </NavButton>
        <NavButton selected={selectedKey === 'more'}>
          <More />
          <TextTitle>More</TextTitle>
        </NavButton>
      </nav>
    </button>
  )
}

export default Navigation
