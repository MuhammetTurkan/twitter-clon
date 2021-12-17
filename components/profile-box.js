import React from 'react'
import cn from 'classnames'
import styles from './profile-box.module.css'
import Button from './button'
import Photo from './photo'
import { ProfileMore } from './icons'
import TextBody from './text-body'

function ProfileBox({ name = 'Muhammet Türkan', slug = '@muhammed.trkn' }) {
  return (
    <Button className={cn([styles.box])}>
      <Photo />
      <div className={styles.body}>
        <TextBody bold>{name}</TextBody>
        <TextBody className={styles.slug}>{slug}</TextBody>
      </div>
      <ProfileMore className={styles.icon} />
    </Button>
  )
}

export default ProfileBox
