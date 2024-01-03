import React from 'react'
import styles from '@/styles/home-components/DermaFillers.module.scss'
import AnimatedLink from '../links/animatedLink'

export default function DermaFillers() {
  return (
    <AnimatedLink
      href='/derma-fillers'
      className={styles.DermaFillers}
    >
      <div className={styles.link_card_container}>
        <h1>DermaFillers</h1>
      </div>
    </AnimatedLink>
  )
}
