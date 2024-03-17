/* eslint-disable react/display-name */
'use client'
import React, { useEffect, useState } from 'react';
import styles from '@/styles/services-page.module.scss';
import SurgicalCareDetails from '@/components/pages/surgical-care/SurgicalCare';
import FacialTreatments  from '@/components/pages/FacialTreatments';
import DermaFillers from '@/components/pages/DermaFillers';
import AntiWrinkle from '@/components/pages/anti-wrinkle/AntiWrinkle';
import HerbaGreenPeel from '@/components/pages/HerbaGreenPeel';
import IvDrip from '@/components/pages/IvDrip';
import BodyTreatments from '@/components/pages/BodyTreatments';

function getComponentForSlug(slug: string) {
  switch (slug) {
    case 'surgical-care':
      return () => <SurgicalCareDetails />;
    case 'facial-treatments':
     return () => <FacialTreatments />;
    case 'derma-fillers':
     return () => <DermaFillers />;
    case 'anti-wrinkle':
     return () => <AntiWrinkle />;
    case 'herbal-green-peel':
     return () => <HerbaGreenPeel />;
    case 'iv-drip':
     return () => <IvDrip />;
    case 'body-treatments':
     return () => <BodyTreatments />;
    default:
      return () => <></>; 
  }
}

export default function ServicePage({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {

  useEffect(() => {
    // Lógica que depende de params.slug o searchParams
  }, [params.slug, searchParams]);

  if(!params.slug) {
    // Manejo del caso cuando no hay slug
    return <div>No hay slug especificado</div>;
  }

  const Component = getComponentForSlug(params.slug);

  return (
    <main className={styles.main}>
      <Component />
    </main>
  );
}
