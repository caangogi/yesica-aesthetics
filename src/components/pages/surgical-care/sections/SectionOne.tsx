import React, { ReactNode } from 'react';
import styles from '@/styles/pages/surgical-care/section-one.module.scss';
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import SmallCard from '@/components/cards/SmallCard';
import MediumCard from '@/components/cards/MediumCard';
import HorizontalCard from '@/components/cards/HorizontalCard';
import HorizontalCardSecondary from '@/components/cards/HorizontalCardSecondary';
interface GridContainerProps {
  children: ReactNode;
}

const SectionOne = () => {
    
  return (

    <section className={styles.section_one}>
       <div className={styles.section_one_content}>
            <div className={styles.section_one_text_container}>
            <h2 className={styles.page_subtitle}>
                Recupera tu bienestar con cuidado especializado.
            </h2>
            <p className={styles.page_description}>
                Experimenta la transformación con nuestras sesiones únicas de LDM diseñadas para el cuidado postquirúrgico superior. Nuestro equipo de expertos está dedicado a proporcionarte el mejor cuidado para una recuperación adecuada después de cualquier procedimiento. Descubre cómo nuestro enfoque personalizado puede ayudarte a obtener resultados excepcionales.
            </p>
            </div>
            <div className={styles.section_one_container}>
                <motion.div 
                    className={` ${styles.item} ${styles.item_01} `}
                    initial={{ opacity: 0} }
                    animate={{
                        opacity:  1,
                    }}
                    transition={{ duration: 0.3, delay: 0.2  }}
                >

                    <div className={styles.item_01_inside_01}>
                        <SmallCard 
                            title='LDM - 360 Liposuction | DRAINING FLUID'
                            price='£65 | 60 minutos'
                            image='/images/pages/20.webp'
                            onClick={() => alert('Hello button')}
                        />
                    </div>

                    <div className={styles.item_01_inside_02}>

                        <MediumCard 
                            title='Local Dynamic Micromassage - 360 Liposuction + Arms Ir Thighs DRAINING FLUID'
                            price='£75 | 70 minutos'
                            image='/images/pages/17.webp'
                            onClick={() => alert('Hello Medium Card!')}
                        />
                    </div>

                    <div className={styles.item_01_inside_03}>
                        <SmallCard 
                            title=' LDM - 360 Liposuction | NOT DRAINING FLUID'
                            price='£70 | 70 minutos'
                            image='/images/pages/24.jpg'
                            onClick={() => alert('Hello button')}
                        />
                    </div>
                </motion.div>

                <motion.div 
                    className={` ${styles.item} ${styles.item_02} `}
                    initial={{ opacity: 0} }
                    animate={{
                        opacity:  1,
                    }}
                    transition={{ duration: 0.7, delay: 0.2  }}

                >
                    <div className={styles.item_02_inside_01}>

                        <HorizontalCard 
                            title='Super Pack LDM - Tummy Tuck & Liposuction + Arms Or Thighs'
                            description='Optimiza tu proceso de recuperación con nuestro exclusivo Pack Promocional. Disfruta de una sesión diseñada para complementar tu cirugía.  ¡Reserva tu sesión hoy y da el primer paso hacia una recuperación más rápida y cómoda!'
                            price='£85 | 90 minutos'
                            image='/images/pages/53.webp'
                            onClick={() => alert('Hello horizontal card!')}
                        />

                    </div>

                    <div className={styles.item_02_inside_02}>
                        
                    </div>

                    <div className={styles.item_02_inside_03}>
                       {/*  <div className={styles.horizontal_card_sec}>
                            <div 
                                className={styles.hc_card_sec_image_container}
                                style={{
                                    backgroundImage: 'url()'
                                }}
                            >

                            </div>
                            <div className={styles.hc_card_sec_text_container}>
                                <h2>
                                    
                                </h2>
                                <h3></h3>
                                <button 
                                    className={styles.reserva_button}
                                    onClick={() => alert('Hello world"')}
                                >
                                    <span>Reservar</span>
                                </button>
                            </div>
                        </div> */}
                        <HorizontalCardSecondary 
                            title='Pack Local Dynamic Micromassage - 360 Liposuction + Arms Ir Thighs DRAINING FLUID'
                            price='£75 | 70 minutos'
                            image='/images/pages/52.webp'
                            onClick={() => alert('hello hcs!')}
                        />
                    </div>
                    
                </motion.div>

                <motion.div 
                    className={` ${styles.item} ${styles.item_03} `}
                    initial={{ opacity: 0} }
                    animate={{
                        opacity:  1,
                    }}
                    transition={{ duration: 0.5, delay: 0.2  }}

                >
                    <div className={styles.item_03_inside_01}>
                        <MediumCard 
                            title='Local Dynamic Micromassage - 360 Liposuction + Arms Or Thighs DRAINING FLUID'
                            price='£75 | 70 minutos' 
                            image='/images/pages/03.webp'
                            onClick={() => alert('Hello medium card!')}
                        />
                    </div>
                    <div className={styles.item_03_inside_02}>
                        <SmallCard 
                            title='Seroma Aspiration - Single Session'
                            price='£55 | 30 minutos'
                            image='/images/pages/21.webp'
                            onClick={() => alert('Hello Button')}
                        />
                    </div>
                    <div className={styles.item_03_inside_03}>
                        <SmallCard 
                            title='LDM - Tummy Tuck - Liposuction DRAINING FLUID'
                            price='£85 | 90 minutos'
                            image='/images/pages/33.webp'
                            onClick={() => alert('Hello Button')}
                        />
                    </div>
                </motion.div>
            </div>
       </div>
    </section>
   
  )
};

export default SectionOne;
