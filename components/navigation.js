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
import TitleBold from './title-bold'

import styles from './navigation.module.css'
function Navigation({ selectedKey }) {
  return (
    <button type="button" className={styles.button}>
      <nav className={styles.nav}>
        <NavButton>
          <Twitter />
        </NavButton>
        <NavButton selected={selectedKey === 'home'}>
          <Home />
          <TitleBold>Home</TitleBold>
        </NavButton>
        <NavButton selected={selectedKey === 'explore'}>
          <Explore />
          <TitleBold>Explore</TitleBold>
        </NavButton>
        <NavButton notify={17} selected={selectedKey === 'notification'}>
          <Notifications />
          <TitleBold>Natifications</TitleBold>
        </NavButton>
        <NavButton selected={selectedKey === 'message'}>
          <Message />
          <TitleBold>Message</TitleBold>
        </NavButton>
        <NavButton selected={selectedKey === 'bookmarks'}>
          <Bookmark />
          <TitleBold>Bookmarks</TitleBold>
        </NavButton>
        <NavButton selected={selectedKey === 'lists'}>
          <Lists />
          <TitleBold>Lists</TitleBold>
        </NavButton>
        <NavButton selected={selectedKey === 'profile'}>
          <Profile />
          <TitleBold>Profile</TitleBold>
        </NavButton>
        <NavButton selected={selectedKey === 'more'}>
          <More />
          <TitleBold>More</TitleBold>
        </NavButton>
      </nav>
    </button>
  )
}

export default Navigation
