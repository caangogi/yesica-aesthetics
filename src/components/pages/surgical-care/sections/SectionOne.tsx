import React, { ReactNode } from 'react';
import styles from '@/styles/pages/surgical-care/section-one.module.scss';
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';

interface GridContainerProps {
  children: ReactNode;
}

const SectionOne = () => {
    
  return (

    <section className={styles.section_one}>
       <div className={styles.section_one_content}>
            <div className={styles.section_one_text_container}>
            <h2>
                Recupera tu bienestar con cuidado especializado.
            </h2>
            <p>
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
                        <div className={styles.small_card}>
                            <div className={styles.sc_text_container}>
                                <h2>
                                    Local Dynamic Micromassage- 360 Liposuction | DRAINING FLUID
                                </h2>
                                <h3>£65 | 60 minutos</h3>
                                <div className={styles.reserva_button_container}>
                                    <button 
                                        className={styles.reserva_button_secondary}
                                        onClick={() => alert('Hello world"')}
                                    >
                                        <span>Reservar</span>
                                    </button>
                                </div>
                            </div>
                            <div className={styles.sc_image_container}>

                            </div>
                        
                        </div>
                    </div>
                    <div className={styles.item_01_inside_02}>
                        <div className={styles.medium_card}>
                            <h2>
                                Local Dynamic Micromassage - 360 Liposuction + Arms Ir Thighs DRAINING FLUID
                            </h2>
                            <h3>£75 | 70 minutos</h3>
                            <button 
                                className={styles.reserva_button}
                                onClick={() => alert('Hello world"')}
                            >
                                <span>Reservar</span>
                            </button>
                        </div>
                    </div>
                    <div className={styles.item_01_inside_03}>
                        <div className={styles.small_card}>
                            <div className={styles.sc_text_container}>
                                <h2>
                                    Local Dynamic Micromassage- 360 Liposuction | DRAINING FLUID
                                </h2>
                                <h3>£65 | 60 minutos</h3>
                                <div className={styles.reserva_button_container}>
                                    <button 
                                        className={styles.reserva_button_secondary}
                                        onClick={() => alert('Hello world"')}
                                    >
                                        <span>Reservar</span>
                                    </button>
                                </div>
                            </div>
                            <div className={styles.sc_image_container}>

                            </div>
                        </div>
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
                        <div className={styles.horizontal_card}>
                            <div className={styles.hc_container}>
                                <div className={styles.hc_text_container}>
                                    <h2>
                                        Super Pack LDM - Tummy Tuck & Liposuction + Arms Or Thighs
                                    </h2>
                                    <p>
                                    Optimiza tu proceso de recuperación con nuestro exclusivo Pack Promocional. Disfruta de una sesión diseñada para complementar tu cirugía. <br/><br/> ¡Reserva tu sesión hoy y da el primer paso hacia una recuperación más rápida y cómoda!
                                    </p>
                                    <h3>£85 | 90 minutos</h3>
                                     <button 
                                        className={styles.reserva_button}
                                        onClick={() => alert('Hello world"')}
                                    >
                                        <span>Reservar</span>
                                    </button>
                                </div>
                                <div className={styles.hc_image_container}>

                                </div>
                            </div>

                            

                        </div> 
                    </div>

                    <div className={styles.item_02_inside_02}>
                        
                    </div>
                    <div className={styles.item_02_inside_03}>
                        <div className={styles.horizontal_card_sec}>
                            <div 
                                className={styles.hc_card_sec_image_container}
                                style={{
                                    backgroundImage: 'url(/images/pages/52.webp)'
                                }}
                            >

                            </div>
                            <div className={styles.hc_card_sec_text_container}>
                                <h2>
                                    Pack Local Dynamic Micromassage - 360 Liposuction + Arms Ir Thighs DRAINING FLUID
                                </h2>
                                <h3>£75 | 70 minutos</h3>
                                <button 
                                    className={styles.reserva_button}
                                    onClick={() => alert('Hello world"')}
                                >
                                    <span>Reservar</span>
                                </button>
                            </div>
                        </div>
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
                        <div className={styles.medium_card}>
                            <h2>
                                Local Dynamic Micromassage - 360 Liposuction + Arms Or Thighs DRAINING FLUID
                            </h2>
                            <h3>£75 | 70 minutos</h3>
                            <button 
                                className={styles.reserva_button}
                                onClick={() => alert('Hello world"')}
                            >
                                <span>Reservar</span>
                            </button>
                        </div>
                    </div>
                    <div className={styles.item_03_inside_02}>
                        <div className={styles.small_card}>
                            <div className={styles.sc_text_container}>
                                <h2>
                                    Local Dynamic Micromassage- 360 Liposuction | DRAINING FLUID
                                </h2>
                                <h3>£65 | 60 minutos</h3>
                                <div className={styles.reserva_button_container}>
                                    <button 
                                        className={styles.reserva_button_secondary}
                                        onClick={() => alert('Hello world"')}
                                    >
                                        <span>Reservar</span>
                                    </button>
                                </div>
                            </div>
                            <div className={styles.sc_image_container}>

                            </div>
                        </div>
                    </div>
                    <div className={styles.item_03_inside_03}>
                        <div className={styles.small_card}>
                            <div className={styles.sc_text_container}>
                                <h2>
                                    Local Dynamic Micromassage- 360 Liposuction | DRAINING FLUID
                                </h2>
                                <h3>£65 | 60 minutos</h3>
                                <div className={styles.reserva_button_container}>
                                    <button 
                                        className={styles.reserva_button_secondary}
                                        onClick={() => alert('Hello world"')}
                                    >
                                        <span>Reservar</span>
                                    </button>
                                </div>
                            </div>
                            <div className={styles.sc_image_container}>

                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
       </div>
    </section>
   
  )
};

export default SectionOne;
