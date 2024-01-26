import React from 'react'
/* import { useRouter } from 'next/router' */
import styles from '@/styles/services-page.module.scss'
import { LinksHomeData } from '@/data/LinksHomeData'
import AnimateCard from '@/components/home-components/AnimateCard'
import Header from '@/components/headers/header'

export default function ServicePage() {
  /*   const router = useRouter();

    console.log(router.asPath) */

  return (
    <main className={styles.main}>
        <Header />
        <div className={styles.main_container}>
            <div className={styles.links_list_container}>
                {LinksHomeData.map((link) => {
                    return(
                        <AnimateCard 
                            key={link.id}
                            title={link.title}
                            description={link.description}
                            image={link.image}
                            url={link.url}
                        />
                    )
                })}
            </div>
        </div>
    </main>
  )
}