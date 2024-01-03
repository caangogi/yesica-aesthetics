import React from 'react'
import styles from '@/styles/home-components/CentralLogo.module.scss'
import AnimatedLink from '../links/animatedLink'
export default function CentralLogo() {
  return (
    <AnimatedLink
      href='/about'
      className={styles.CentralLogo}
    >
      <div className={`${styles.link_card_container} header_transition`}>
          
      </div>
    </AnimatedLink>
  )
}
