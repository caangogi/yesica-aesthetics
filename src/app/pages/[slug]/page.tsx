'use client'

import React from 'react'
import SurgicalCareDetails from '@/components/pages/surgical-care/SurgicalCare';
import styles from '@/styles/pages/page.module.scss';

export default function Page() {
  return (
      <div className={styles.page}>
          {/* <video autoPlay muted loop controls={false} className={styles.background_video}>
            <source src="/videos/02.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video> */}
        <SurgicalCareDetails />
      </div>
  )
}
