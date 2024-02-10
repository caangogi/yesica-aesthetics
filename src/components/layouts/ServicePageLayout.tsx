'use client'
import { useEffect, useState } from 'react';
import styles from '@/styles/services-page.module.scss';
import { motion } from "framer-motion";
import { LinksHomeData } from '@/data/LinksHomeData';
import AnimateCard from '@/components/home-components/AnimateCard';
import { useParams } from 'next/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface AnimateCardProps {
    id: number;
    title: string;
    description: string;
    image: string;
    url: string;
  }

export default function ServicePageLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    
    const [linksHomeData, setLinksHomeData] = useState<AnimateCardProps[]>([]);
    const params = useParams<{ slug: string  }>();

    useEffect(() => {
        const mixLinksHomeData = () => {
            let links: AnimateCardProps[] = LinksHomeData.filter((item) => !item.url.includes(params.slug));
            for (let i = links.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [links[i], links[j]] = [links[j], links[i]]; 
            }
            setLinksHomeData(links); 
        };

        mixLinksHomeData();
    }, [params.slug]); 

    return (
        <div>
            {children}
            <div className={styles.service_page_main_container}>
                <div className={styles.service_page_links_container}>
                    {linksHomeData.map((link) => (
                    <AnimateCard
                        key={link.id}
                        id={link.id}
                        image={link.image}
                        title={link.title}
                        description={link.description}
                        url={`/pages/${link.url}`}
                    />
                    ))}
                </div>
               
            </div>
        </div>
    );
}
