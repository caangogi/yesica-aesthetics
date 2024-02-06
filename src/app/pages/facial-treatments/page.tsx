'use client'
import React, { useEffect, useState } from 'react';
import styles from '@/styles/services-page.module.scss';
import Header from '@/components/headers/header';
import { LinksHomeData } from '@/data/LinksHomeData';
import ServicePageLayout from '@/components/layouts/ServicePageLayout';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface AnimateCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
}

function FacialTreatmentsPage({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const [itemData, setItemData] = useState<AnimateCardProps | null>(null);
  const [linksHomeData, setLinksHomeData] = useState<AnimateCardProps[] >()
  const [error, setError] = useState('');
  
 useEffect(() => {
  const fetchItem = async () => {
    let filteredData = LinksHomeData;
    filteredData = LinksHomeData.filter((item) => item.url.includes(params.slug));
    setItemData(filteredData[0])
  };

  const linksHomeData = () => {
    let links = LinksHomeData.filter((item) => !item.url.includes(params.slug));
    for (let i = links.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [links[i], links[j]] = [links[j], links[i]]; 
    }
  
    setLinksHomeData(links);
  };
  
  fetchItem();
  linksHomeData();
}, [params.slug]);

  
return (
  <>
  <main className={styles.main}>
    <Header />
    <motion.div 
      className={styles.service_page} 
      style={{ 
        backgroundImage: `url(${itemData?.image})`,
      }}
      initial={{ y: 20, opacity:0}}
      animate={{ y:0, opacity: 1}}
      transition={{ease: 'easeInOut', duration: 0.75}}
    >
      <motion.div 
        className={styles.text_container}
        initial={{ x: 40, opacity:0}}
        animate={{ x:0, opacity: 1}}
        transition={{ease: 'easeInOut', duration: .5}}
      >
        <h1 className={styles.title}>{itemData?.title}</h1>
        <p className={styles.description}>{itemData?.description}</p>
          <Link
            href={`/pages/${itemData?.url}`}
          >Ver más</Link>
      </motion.div>
    </motion.div>

    
  </main>
  </>
);
}




export default FacialTreatmentsPage;