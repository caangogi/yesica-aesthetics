'use client'
import styles from '@/styles/services-page.module.scss';
import { motion } from "framer-motion"
import { LinksHomeData } from '@/data/LinksHomeData';
import AnimateCard from '@/components/home-components/AnimateCard';

export default function Template({
    children,
    params
} : {
    children: React.ReactNode,
    params: { slug: string }
}){

    
    return (
        <div
        >
            {children}
            <div className={styles.service_page_main_container}>
                <div className={styles.service_page_links_container}>
                {LinksHomeData?.map((link) => (
                    <AnimateCard
                    key={link.id}
                    id={link.id}
                    image={link.image}
                    title={link.title}
                    description={link.description}
                    url={link.url}
                    />
                ))}
                </div>
            </div>
        </div>
    )
}