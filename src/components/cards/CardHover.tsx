import Image from 'next/image'
import React from 'react'
import styles from '@/styles/card-hover.module.scss'

function CardHover() {


  return (
    <div className={styles.card_hover}>
        <div className={styles.card_hover__content}>
        <h3 className={styles.card_hover__title}>
            Make your <span>choice</span> right now!
        </h3>
        <p className={styles.card_hover__text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quisquam doloremque nostrum laboriosam, blanditiis libero corporis nulla a aut?</p>
        <a href="#" className={styles.card_hover__link}>
            <span>Learn How</span>
            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>        
        </a>
        </div>
        <div className={styles.card_hover__extra}>
        <h4>Learn <span>now</span> and get <span>40%</span> discount!</h4>
        </div>
        <Image 

            width={1000}
            height={1000}
            src="/images/link-cards/01.png" alt="card hover alt "
        />
    </div>
  )
}

export default CardHover
