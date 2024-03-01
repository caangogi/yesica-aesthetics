import React, { ReactNode } from 'react';
import styles from '@/styles/pages/surgical-care/section-two.module.scss';
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import CardHoverSecondary from '@/components/cards/CardHoverSecundary';

interface GridContainerProps {
  children: ReactNode;
}

const SectionOne = () => {
    
  return (

    <section className={styles.section_two}>
       <div className={styles.section_two_content}>

            <div className={styles.section_two_text_container}>
                <h2 className={styles.page_subtitle}>
                    Paquetes Integrales de Contorno Corporal
                </h2>
                <p className={styles.page_description}>
                    Descubre nuestros cuidadosamente diseñados Paquetes Integrales de Contorno Corporal, diseñados para proporcionar soluciones personalizadas para tus objetivos estéticos. Cada paquete combina técnicas avanzadas de cuidado quirúrgico con sesiones de masaje de drenaje linfático para obtener resultados óptimos. <br/><br/> Ya sea que estés apuntando a depósitos de grasa localizados o buscando una transformación corporal total, nuestros paquetes ofrecen un enfoque holístico para esculpir y rejuvenecer tu cuerpo. Elige el paquete que mejor se adapte a tus necesidades y emprende un viaje para realzar tu belleza natural con confianza.
                </p>
            </div>

            <div className={styles.section_two_container}>
               <div className={styles.section_two_item_one}>

                    <div className={styles.section_two_item_one_inside_one}>
                        <CardHoverSecondary 
                            title='Full Body Contouring Package'
                            includedServices={['LDM - 360 Liposuction + Draining Fluid (60 mins)','LDM - Tummy Tuck & Liposuction (60 mins)']}
                            durationService='90'
                            packagePrice={115}
                            backgroundImage='/images/pages/58.webp'
                        />
                    </div>

                    <div className={styles.section_two_item_one_inside_two}>
                    <CardHoverSecondary 
                            title='Localized Fat Reduction Package'
                            includedServices={['LDM - 360 Liposuction (Not Draining Fluid) (60 mins)','Seroma Aspiration - Single Session (30 mins)']}
                            durationService='90'
                            packagePrice={115}
                            backgroundImage='/images/pages/55.webp'
                        />
                    </div>
               </div>
               <div className={styles.section_two_item_two}>
                    <div className={styles.section_two_item_two_inside_one}>
                        <CardHoverSecondary 
                            title='Abdominal Rejuvenation Package'
                            includedServices={['LDM - Tummy Tuck & Liposuction + Arms or Thighs (90 mins)','Seroma Aspiration - Single Session (30 mins)']}
                            durationService='120'
                            packagePrice={155}
                            backgroundImage='/images/pages/54.webp'
                        />
                    </div>
                    <div className={styles.section_two_item_two_inside_two}>
                        <CardHoverSecondary 
                            title='Total Body Fat Reduction Package'
                            includedServices={['LDM - 360 Liposuction + Arms or Thighs (Not Draining Fluid) (70 mins)','LDM - Tummy Tuck & Liposuction (60 mins)']}
                            durationService='130'
                            packagePrice={180}
                            backgroundImage='/images/pages/65.webp'
                        />
                    </div>
               </div>
            </div>
       </div>
    </section>
   
  )
};

export default SectionOne;
