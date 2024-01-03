import React from 'react'
import styles from '@/styles/home-components/IvDrip.module.scss'
import AnimatedLink from '../links/animatedLink'
export default function IvDrip() {
  return (
    <AnimatedLink
      href='/iv-drip'
      className={styles.IvDrip}
    >
      <div className={styles.link_card_container}>
          <h1>IvDrip</h1>
      </div>
    </AnimatedLink>
  )
}
