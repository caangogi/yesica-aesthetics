import React from 'react'
import styles from '@/styles/home-components/HerbalGreenPeel.module.scss'
import AnimatedLink from '../links/animatedLink'
export default function HerbalGreenPeel() {
  return (
    <AnimatedLink
      href='/herbal-green-peel'
      className={styles.HerbalGreenPeel}
    >
      <div className={styles.link_card_container}>
          <h1>HerbalGreenPeel</h1>
      </div>
    </AnimatedLink>
  )
}
