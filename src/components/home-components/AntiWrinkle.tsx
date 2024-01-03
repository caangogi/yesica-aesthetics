import React from 'react'
import styles from '@/styles/home-components/AntiWrinkle.module.scss'
import AnimatedLink from '../links/animatedLink'

export default function AntiWrinkle() {
  return (
    <AnimatedLink
      href='/anti-wrinkle'
      className={styles.AntiWrinkle}
    >
      <div className={styles.link_card_container}>
        <h1>AntiWrinkle</h1>
      </div>
    </AnimatedLink>
  )
}