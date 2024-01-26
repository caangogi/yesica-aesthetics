import React from 'react';
import styles from '@/styles/home-components/AnimateCard.module.scss';
import AnimatedLink from '@/components/links/animatedLink';


interface AnimateCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

const AnimateCard: React.FC<AnimateCardProps> = ({ title, description, image, url }) => {
    return (
      <AnimatedLink href={url} className={styles.AnimateCard}>
        <div className={styles.link_card_container}
          style={{
            backgroundImage: `url(${image})`
          }}
        >
          <div className={styles.text_container}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </AnimatedLink>
    );
  };
  
  export default AnimateCard;