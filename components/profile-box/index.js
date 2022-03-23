import React from 'react'
import cn from 'classnames'
import styles from './style.module.css'
import Button from '../button'
import Photo from '../photo'
import { ProfileMore } from '../icons'
import TextBody from '../text/body'

function ProfileBox({
  flat = false,
  name = 'Muhammet Türk',
  slug = '@muhammed.trkn'
}) {
  return (
    <Button className={cn([styles.box])}>
      <Photo size={39} />
      {!flat && (
        <>
          <div className={styles.body}>
            <TextBody bold>{name}</TextBody>
            <TextBody className={styles.slug}>{slug}</TextBody>
          </div>
          <ProfileMore className={styles.icon} />
        </>
      )}
    </Button>
  )
}

export default ProfileBox
