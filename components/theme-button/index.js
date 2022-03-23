import React from 'react'
import cn from 'classnames'
import styles from './style.module.css'
import Button from '../button'
function ThemeButton({ className, children, big = false, ...props }) {
  return (
    <Button
      className={cn(styles.button, big && styles.big, className)}
      {...props}
    >
      {children}
    </Button>
  )
}

export default ThemeButton
