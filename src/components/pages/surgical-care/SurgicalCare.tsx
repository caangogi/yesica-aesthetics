import React from 'react';
import styles from '@/styles/pages/surgical-care/surgical-care-page.module.scss';
import { Section } from '@/components/sections/PageSection';
import CardHover from '@/components/cards/CardHover';
import SectionOne from './sections/SectionOne'
import SectionTwo from './sections/SectionTwo'
import SectionThree from './sections/SectionThree';
import SectionFour from './sections/SectionFour';

export default function SurgicalCareDetails(/* {itemData: AnimateCardProps} */) {

  return (
    <div className={styles.surgical_care_page}>

      <Section className={`${styles.section} ${styles.section1}`}>
        <div className={styles.section1_content}>

          <div className={styles.text_container}>
            <h2 className={styles.title_page}>Dale el mejor cuidado a tu cuerpo después de la cirugía </h2>
            <p className={styles.sub_title_page}>Sesión única de LDM para un Cuidado Postquirúrgico Superior</p>
          </div>

          <div id='card_container' className={styles.cards_container}>
            <CardHover 
              title='Surgical Care LDM/ Packcage of 10'
              description='Oferta en LMD, Ahorra hasta un 15% en todos los paquetes de más de 10 sesiones.'
              backgroundImage='/images/pages/47.webp'
              discount='14'
              packagePrice={550}
            />
          </div>

        </div>
      </Section>

      <Section className={`${styles.section} ${styles.section2}`}>
        <SectionOne />
      </Section>

      <Section className={`${styles.section} ${styles.section3}`}>
        <SectionTwo/>
      </Section>
      
      <Section className={`${styles.section} ${styles.section4}`}>
        <SectionThree />
      </Section>


      <Section className={`${styles.section} ${styles.section5}`}>
        <SectionFour />
      </Section>
    </div>
  );
}
