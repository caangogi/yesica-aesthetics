import React from 'react';
import styles from '@/styles/pages/surgical-care-page.module.scss';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CardHover from '../cards/CardHover';

interface SectionProps {
  children: React.ReactNode; 
  className?: string; 
}

const Section: React.FC<SectionProps> = ({ children, className }) => {

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: -100 }} 
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? '-10vh' : '0'
      }}
      transition={{ duration: 0.5, delay: 0.2  }}
    >
     
     {children} 
 
    </motion.div>
  );
};

export default function SurgicalCareDetails() {
  return (
    <div className={styles.surgical_care_page}>
      <Section className={`${styles.section} ${styles.section1}`}>
      <div className={styles.section1_content}>

        <div className={styles.text_container}>
          <h2 className={styles.title_page}>Dale el mejor cuidado a tu cuerpo después de la cirugía con una <span>sesión única de LDM para un Cuidado Postquirúrgico Superior</span></h2>
        </div>

        <div id='card_container' className={styles.cards_container}>
          <CardHover/>
        </div>

      </div>

      </Section>

      <Section className={`${styles.section} ${styles.section2}`}>
        <div className={styles.text_container}>
          <h2 className={styles.title_page}>Dale el mejor cuidado a tu cuerpo después de la cirugía: Sesión Única de LDM para un Cuidado Postquirúrgico Superior</h2>
        </div>
      </Section>

      <Section className={`${styles.section} ${styles.section3}`}>
        <div className={styles.text_container}>
          <h2 className={styles.title_page}>Dale el mejor cuidado a tu cuerpo después de la cirugía: Sesión Única de LDM para un Cuidado Postquirúrgico Superior</h2>
        </div>
      </Section>

      <Section className={`${styles.section} ${styles.section4}`}>
        <div className={styles.text_container}>
          <h2 className={styles.title_page}>Dale el mejor cuidado a tu cuerpo después de la cirugía: Sesión Única de LDM para un Cuidado Postquirúrgico Superior</h2>
        </div>
      </Section>

      <Section className={`${styles.section} ${styles.section5}`}>
        <div className={styles.text_container}>
          <h2 className={styles.title_page}>Dale el mejor cuidado a tu cuerpo después de la cirugía: Sesión Única de LDM para un Cuidado Postquirúrgico Superior</h2>
        </div>
      </Section>
    </div>
  );
}
