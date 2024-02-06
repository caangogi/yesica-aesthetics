import React from 'react';
import styles from '@/styles/pages/surgical-care-page.module.scss';
import {AnimatePresence, motion } from 'framer-motion'; 

export default function SurgicalCareDetails() {
  return (
    <div className={styles.surgical_care_page}>
        <section className={`${styles.section} ${styles.section1}`}>
            <AnimatePresence>
              <motion.div 
                className={`${styles.section1_content}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.75 }}
              >
                <div className={styles.text_container}>
                   <h2 className={styles.title_page}>Dale el mejor cuidado a tu cuerpo después de la cirugía: Sesión Única de LDM para un Cuidado Postquirúrgico Superior</h2>
                </div>
              </motion.div>
            </AnimatePresence>
        </section>

        <section className={`${styles.section} ${styles.section2}`}>
          {/* Contenido de la sección 2 */}
        </section>

        <section className={`${styles.section} ${styles.section3}`}>
          {/* Contenido de la sección 3 */}
        </section>

        <section className={`${styles.section} ${styles.section4}`}>
          {/* Contenido de la sección 4 */}
        </section>

        <section className={`${styles.section} ${styles.section5}`}>
          <div className={styles.content}>
            {/* Contenido principal */}
          </div>
          <aside className={styles.aside}>
            {/* Contenido secundario */}
          </aside>
          <footer className={styles.footer}>
            {/* Pie de página */}
          </footer>
        </section>
    </div>
  )
}
