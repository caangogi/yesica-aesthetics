import React from 'react'
import styles from '@/styles/home-components/FacialTreatments.module.scss'
import AnimatedLink from '../links/animatedLink'
export default function FacialTreatments() {
  return (
    <AnimatedLink
      href='/facial-treatments'
      className={styles.FacialTreatments}
    >
      <div className={styles.link_card_container}>
        <h1>FacialTreatments</h1>
      </div>
    </AnimatedLink>
  )
}
