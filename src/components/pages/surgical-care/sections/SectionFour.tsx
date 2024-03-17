import React, { ReactNode } from 'react';
import styles from '@/styles/pages/surgical-care/section-four.module.scss';
import {SurgicalCarePackages} from '@/data/SurgicalCarePackages'
import CardHover from '@/components/cards/CardHover';

interface GridContainerProps {
  children: ReactNode;
}

const SectionFour = () => {
    
  return (

    <section className={styles.section_four}>
       <div className={styles.section_four_content}>
          <div className={styles.section_four_text_container}>
              <h2 className={styles.page_subtitle}>
                Experimenta la excelencia en nuestros servicios especializados.
              </h2>
              <p className={styles.page_description}>
                Sumérgete en la calidad incomparable de nuestros servicios, desde el cuidado quirúrgico postoperatorio hasta tratamientos avanzados como la liposucción LDM-360. Con paquetes diseñados para tu bienestar, cada sesión es una experiencia de cuidado personalizado y profesionalismo dedicado. Confía en nosotros para tu camino hacia la belleza y la recuperación.
              </p>
          </div>
          <div className={styles.section_four_cards_container}>
              {SurgicalCarePackages.map((item) => 
                <CardHover 
                  key={item.id}
                  title={item.title} 
                  description={item.description}
                  backgroundImage={item.backgroundImage}
                  discount={item.discount}
                  packagePrice={item.packagePrice}
                />
              )}
          </div>
       </div>
    </section>
   
  )
};

export default SectionFour;
