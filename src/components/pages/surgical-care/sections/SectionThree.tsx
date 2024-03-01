import React, { ReactNode } from 'react';
import styles from '@/styles/pages/surgical-care/section-three.module.scss';

interface GridContainerProps {
  children: ReactNode;
}

const SectionThree = () => {
    
  return (

    <section className={styles.section_three}>
       <div className={styles.section_three_content}>

            <div className={styles.section_three_text_container}>
                <h2 className={styles.page_subtitle}>
                    Nuestros servicios estéticos están diseñados con el mismo cuidado y profesionalismo que mereces. Deja que Yesica Aesthetics realce tu belleza natural con el tratamiento que se adapte a ti, porque tú mereces lo mejor.
                </h2>
            </div>
       </div>
    </section>
   
  )
};

export default SectionThree;
