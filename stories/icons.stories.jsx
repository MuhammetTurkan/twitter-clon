import React from 'react'
import Button from '../components/button'

import * as Icons from '../components/icons'
import Photo from '../components/photo'
import ProfileBox from '../components/profile-box'
export default {
  title: 'Icons'
}

export const Icon = () => (
  <div className="icons">
    <Icons.BookmarksFill />
    <Icons.Bookmark />
    <Icons.Date />
    <Icons.Explore />
    <Icons.Emoji />
    <Icons.ExploreFill />
    <Icons.Gif />
    <Icons.Home />
    <Icons.HomFill />
    <Icons.Like />
    <Icons.Lists />
    <Icons.ListsFill />
    <Icons.Media />
    <Icons.Message />
    <Icons.MessageFill />
    <Icons.More />
    <Icons.New />
    <Icons.Notifications />
    <Icons.NotificationsFill />
    <Icons.Options />
    <Icons.Profile />
    <Icons.ProfileFill />
    <Icons.ProfileMore />
    <Icons.Reply />
    <Icons.Retweet />
    <Icons.Search />
    <Icons.Share />
    <Icons.Survey />
    <Icons.Tik />
    <Icons.Twitter />
  </div>
)

export const ProfilePhoto = () => <Photo />
export const Box = () => <ProfileBox />
