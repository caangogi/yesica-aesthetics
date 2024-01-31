import React from 'react'
import styles from '@/styles/header.module.scss'
import Logo from '@/assets/images/logo.jpg'
import Image from 'next/image'
import AnimatedLink from '../links/animatedLink'
export default function Header() {
  return (
    <div className={`${styles.header}`}>
       <div className={styles.header_container}>
       <AnimatedLink
            href='/'
        >
            <Image 
                src={Logo}
                height={55}
                width={55}
                alt='Yesica Giraldo Aesthetics Logo'
            />
        </AnimatedLink>
       </div>
    </div>
  )
}
