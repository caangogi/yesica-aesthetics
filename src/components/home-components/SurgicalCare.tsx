import React from 'react'
import styles from '@/styles/home-components/SurgicalCare.module.scss'
import AnimatedLink from '@/components/links/animatedLink'
import Image from 'next/image'
import LinkCardImage from '@/assets/images/link-cards/mujer-marcada-cirugia-estetica.jpg'

export default function SurgicalCare() {
  return (
    <AnimatedLink 
      href='/surgical-care'
      className={styles.SurgicalCare}
    >
      <div
        className={styles.link_card_container}
      >
        <div
          className={styles.link_card_image_container}
        >
         
        </div>
        <div>
          <h1>Surgical Care</h1>
        </div>
      </div>
    </AnimatedLink>
  )
}
