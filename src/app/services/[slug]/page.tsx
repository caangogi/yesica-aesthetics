'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import styles from '@/styles/services-page.module.scss';
import Header from '@/components/headers/header';

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

  console.log(params.slug)

 /*  console.log(params.slug) */

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`/api/get-item/?${params.slug}`);
        console.log(response)
        setItemData(response.data.linksHomeData);
      } catch (err) {
        
        setError('Error al obtener datos');
        console.error(err);
      }
    };

    fetchItem();
  }, [params.slug]);

  return (
    <main className={styles.main}>
      <Header />
      <div  
        className={styles.service_page}>
          <div
            className={styles.main_container_item_left}
          >

              <h1>Lefth</h1>
          </div>
          <div
            className={styles.main_container_item_right}
          >

            <h1>side right</h1>
          </div>
      </div>
    </main>
  );
}
