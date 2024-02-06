'use client'
import React, { useEffect, useState } from 'react';
import styles from '@/styles/services-page.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { LinksHomeData } from '@/data/LinksHomeData';
import SurgicalCareDetails from '@/components/pages/SurgicalCare';
import FacialTreatments from '@/components/pages/FacialTreatments';
import DermaFillers from '@/components/pages/DermaFillers';
import AntiWrinkle from '@/components/pages/AntiWrinkle';
import HerbaGreenPeel from '@/components/pages/HerbaGreenPeel';
import IvDrip from '@/components/pages/IvDrip';
import BodyTreatments from '@/components/pages/BodyTreatments';

interface AnimateCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
}

function getComponentForSlug(slug: string) {
  switch (slug) {
    case 'surgical-care':
      return SurgicalCareDetails;
    case 'facial-treatments':
     return FacialTreatments;
    case 'derma-fillers':
     return DermaFillers;
    case 'anti-wrinkle':
     return AntiWrinkle;
    case 'herbal-green-peel':
     return HerbaGreenPeel;
    case 'iv-drip':
     return IvDrip;
    case 'body-treatments':
     return BodyTreatments;
    default:
      return null; 
  }
}

export default function ServicePage({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  
  const [itemData, setItemData] = useState<AnimateCardProps | null>(null);
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  useEffect(() => {
    const fetchItem = async () => {
      let filteredData = LinksHomeData;
      filteredData = LinksHomeData.filter((item) => item.url.includes(params.slug));
      setItemData(filteredData[0])
    };
    fetchItem();
  }, [params.slug]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsComponentVisible(true);
      } 
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
}, []);

  const DetailComponent = getComponentForSlug(params.slug);

return (
  <>
  <main className={styles.main}>
    <AnimatePresence>
      {isComponentVisible ? (
          <motion.div
            key="detailComponent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            {DetailComponent && <DetailComponent />}
          </motion.div>
   
      ) : (
         
            <motion.div 
              key="servicePage"
              className={styles.service_page} 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              style={{ 
                backgroundImage: `url(${itemData?.image})`,
                viewTransitionName: `image-${itemData?.id}`
              }}
            >
              <div 
                className={styles.text_container}
                style={{
                  viewTransitionName: `text-container-${itemData?.id}`
                }}
              >
                <h1 className={styles.title}>{itemData?.title}</h1>
                <p className={styles.description}>{itemData?.description}</p>
                <button
                  className={styles.principal_button}
                  onClick={() => setIsComponentVisible(!isComponentVisible)}
                >
                  <span className={styles.principal_button_text}>Más información</span>
                </button>
              </div>
            </motion.div>
        )
      }
      </AnimatePresence>
  </main>
  </>
);
}
