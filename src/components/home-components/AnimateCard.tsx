import React from 'react';
import styles from '@/styles/home-components/AnimateCard.module.scss';
import AnimatedLink from '@/components/links/animatedLink';


interface AnimateCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
}

const AnimateCard: React.FC<AnimateCardProps> = ({ id, title, description, image, url }) => {
  return (
    <AnimatedLink href={`${url}`} className={styles.AnimateCard}>
      <div className={styles.link_card_container}
        style={{
          backgroundImage: `url(${image})`,
          viewTransitionName: `image-${id}`
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