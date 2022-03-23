import React from 'react'
import cn from 'classnames'
import styles from './button.module.css'

import Button from '../button'
function NavButton({ selected, notify, children, className, ...props }) {
  return (
    <Button
      className={cn(
        styles.navButton,
        selected && styles.navButtonSelectedd,
        className
      )}
      {...props}
    >
      {notify > 0 && <span className={styles.notify}>{notify}</span>}
      {children}
    </Button>
  )
}

export default NavButton
