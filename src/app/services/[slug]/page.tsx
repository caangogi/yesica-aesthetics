'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import styles from '@/styles/services-page.module.scss';
import Header from '@/components/headers/header';
import { LinksHomeData } from '@/data/LinksHomeData';
import AnimateCard from '@/components/home-components/AnimateCard';
import { Parallax } from 'react-parallax'; 

interface AnimateCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
}

export default function ServicePage({
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
    <div 
      className={styles.service_page} 
    >
      <div className={styles.text_container}>
        <h1 className={styles.title}>{itemData?.title}</h1>
        <p className={styles.description}>{itemData?.description}</p>
      </div>

      <div className={styles.service_page_main_container}>
        <div className={styles.service_page_links_container}>
          {linksHomeData?.map((link) => (
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

    
  </main>
  </>
);
}