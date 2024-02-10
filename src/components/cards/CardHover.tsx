import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMediaQuery } from '@react-hook/media-query';
import styles from '@/styles/card-hover.module.scss';

function CardHover() {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isMobile = useMediaQuery('(max-width: 901px)');

  const top_variants = {
    open: {  y: "-100%" },
    closed: { y: 0 },
  }
  const bottom_variants = {
    open: {  y: "-0%" },
    closed: { y: "100%" },
  }
  const link_variants = {
    open: {  y: "-0%" },
    closed: { y: "50%" },
  }

  return (
    <motion.div
      className={styles.card_hover}
      style={{ 
        backgroundImage: `url(/images/link-cards/05.png)`,
        viewTransitionName: `image-01`
      }}
      /* style={{
        backgroundImage:`url(${image})`,
        viewTransitionName: `image-${id}`
      }} */
    >
      <motion.div
        key={'top'}
        className={styles.card_hover__content}
      /*   whileHover={{top: 0}} */
        
       /*  variants={top_variants}
        animate={scrollPosition >= 200 && isMobile ? "open" : "closed"}
        transition={{ duration: 0.3 }} */
      >
        <h2 className={styles.card_hover__title}>
          Make your <span>choice</span> right now!
        </h2>
        <p className={styles.card_hover__text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          quisquam doloremque nostrum laboriosam, blanditiis libero corporis
          nulla a aut?
        </p>
        <motion.div 
            className={styles.card_hover__link}
           /*  variants={link_variants}
            animate={scrollPosition >= 200 && isMobile ? "open" : "closed"}
            transition={{ duration: 0.6 }} */
        >
          <h3>Reservar </h3>
        </motion.div>
      </motion.div>
      <motion.div
        key={'bottom'}
        className={styles.card_hover__extra}
        /* 
        variants={bottom_variants}
        animate={scrollPosition >= 200 && isMobile ? "open" : "closed"}
        transition={{ duration: 0.6 }} */
      >
        <h3>
          Learn <span>now</span> and get <span>40%</span> discount!
        </h3>
      </motion.div>
     {/*  <Image
        width={1000}
        height={1000}
        src="/images/link-cards/03.png"
        alt="card hover alt"

      /> */}
    </motion.div>
  );
}

export default CardHover;
