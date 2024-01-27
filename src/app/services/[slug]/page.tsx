'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import styles from '@/styles/services-page.module.scss';
import Header from '@/components/headers/header';
import { LinksHomeData } from '@/data/LinksHomeData';

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
  const [error, setError] = useState('');

 useEffect(() => {
  const fetchItem = async () => {
    let filteredData = LinksHomeData;
    filteredData = LinksHomeData.filter((item) => item.url.includes(params.slug));
    setItemData(filteredData[0])
  };
  fetchItem();
}, [params.slug]);

  return (
    <main className={styles.main}>
      <Header />
      <div  
        className={styles.service_page}
        style={{
          backgroundImage: `url(${itemData?.image})`,
          viewTransitionName: `image-${itemData?.id}`
        }}
        >
      </div>
    </main>
  );
}
