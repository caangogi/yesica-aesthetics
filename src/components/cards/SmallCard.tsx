// SmallCard.tsx
import React from 'react';
import styles from '@/styles/components/cards/small_card.module.scss';
import SecondaryButton from '../buttons/CardsButton';

interface SmallCardProps {
    title: string;
    price: string;
    image: string;
    onClick: () => void;
}

const SmallCard: React.FC<SmallCardProps> = ({ title, price, image, onClick }) => {
    return (
        <div className={styles['small-card']}>
            <div className={styles['small-card__text-container']}>
                <h2 className={styles['small-card__text-container__title']}>{title}</h2>
                <h3 className={styles['small-card__text-container__price']}>{price}</h3>
                <SecondaryButton 
                    onClick={onClick}
                    primary={false}
                >
                    <h3>Reservar</h3>
                </SecondaryButton>
            </div>
            <div 
                className={styles['small-card__image-container']}
                style={{
                    backgroundImage: `url(${image})`
                }}
            
            />
        </div>
    );
};

export default SmallCard;
