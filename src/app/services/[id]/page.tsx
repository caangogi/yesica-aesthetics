"use client"
import React, {  useEffect, useState } from 'react';
import styles from '@/styles/services-page.module.scss';
import { LinksHomeData } from '@/data/LinksHomeData';
import Header from '@/components/headers/header';

type AnimateCardProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
};

export default function ServicePage({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const [selectedLink, setSelectedLink] = useState<AnimateCardProps>();
    
  useEffect(() => {
    if(!searchParams.id) return
    const selectedLinkId = parseInt(searchParams.id as string); 
    setSelectedLink(LinksHomeData[selectedLinkId]) 
  }, [searchParams])

  if(!searchParams) return

  return (
    <main 
      className={styles.main} 
      style={{
        backgroundImage: `url(${selectedLink?.image})`,
        viewTransitionName:  `image-${selectedLink?.url}`, 
      }}
    >
      <Header />

      <div className={styles.main_container}>
        <div className={styles.links_list_container}>

          <h1> {selectedLink?.title} </h1>
        </div>
      </div>
    </main>
  );
}
