import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
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

  return (
    <motion.div
      className={styles.card_hover}
      animate={scrollPosition >= 0.07 * window.innerHeight ? 'hover' : 'initial'}
    >
      <motion.div
        className={styles.card_hover__content}
        animate={scrollPosition >= 0.07 * window.innerHeight ? 'hover' : 'initial'}
      >
        <h2 className={styles.card_hover__title}>
          Make your <span>choice</span> right now!
        </h2>
        <p className={styles.card_hover__text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          quisquam doloremque nostrum laboriosam, blanditiis libero corporis
          nulla a aut?
        </p>
        <a href="#card_container" className={styles.card_hover__link}>
          <h3>Reservar </h3>
        </a>
      </motion.div>
      <motion.div
        className={styles.card_hover__extra}
        animate={scrollPosition >= 0.07 * window.innerHeight ? 'hover' : 'initial'}
      >
        <h3>
          Learn <span>now</span> and get <span>40%</span> discount!
        </h3>
      </motion.div>
      <Image
        width={1000}
        height={1000}
        src="/images/link-cards/01.png"
        alt="card hover alt "
      />
    </motion.div>
  );
}

export default CardHover;
