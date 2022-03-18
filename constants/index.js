export default {
  TABLET_SİZE: 980,
  DESKTOP_SİZE: 1270
}

import * as Icon from '../components/icons'

export const MENU = [
  {
    key: 'twitter',
    path: '/',
    icon: <Icon.Twitter style={{ fontSize: 30, color: 'white' }} />,
    iconSelected: <Icon.Twitter style={{ fontSize: 30, color: 'white' }} />,
    title: '',
    notify: 0
  },
  {
    key: 'home',
    path: '/',
    icon: <Icon.Home />,
    iconSelected: <Icon.HomFill />,
    title: 'Home',
    notify: 0
  },
  {
    key: 'explore',
    path: '/explore',
    icon: <Icon.Explore />,
    iconSelected: <Icon.ExploreFill />,
    title: 'Explore',
    notify: 0
  },
  {
    key: 'notifications',
    path: '/notifications',
    icon: <Icon.Notifications />,
    iconSelected: <Icon.NotificationsFill />,
    title: 'Notifications',
    notify: 7
  },
  {
    key: 'message',
    path: '/message',
    icon: <Icon.Message />,
    iconSelected: <Icon.MessageFill />,
    title: 'Message',
    notify: 0
  },
  {
    key: 'bookmarks',
    path: '/bookmarks',
    icon: <Icon.Bookmark />,
    iconSelected: <Icon.BookmarksFill />,
    title: 'Bookmarks',
    notify: 0
  },
  {
    key: 'lists',
    path: '/lists',
    icon: <Icon.Lists />,
    iconSelected: <Icon.ListsFill />,
    title: 'Lists',
    notify: 0
  },
  {
    key: 'profile',
    path: '/profile',
    icon: <Icon.Profile />,
    iconSelected: <Icon.ProfileFill />,
    title: 'Profile',
    notify: 0
  },
  {
    key: 'more',
    path: '/more',
    icon: <Icon.More />,
    iconSelected: <Icon.More />,
    title: 'More',
    notify: 0
  }
]
