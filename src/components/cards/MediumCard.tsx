// MediumCard.tsx
import React from 'react';
import styles from '@/styles/components/cards/medium_card.module.scss';
import CardsButton from '@/components/buttons/CardsButton';

interface MediumCardProps {
    title: string;
    price: string;
    image: string;
    onClick: () => void;
}

const MediumCard: React.FC<MediumCardProps> = ({title, price, image, onClick}) => {
    return (
        <div 
            className={styles.medium_card}
            style={{
                backgroundImage: `url(${image})`
            }}
        >
            <div className={styles.medium_card_container}>
                <h2 className={styles.medium_card_title}>{title}</h2>
                <h3 className={styles.medium_card_price}>{price}</h3>
                <CardsButton onClick={onClick}>
                    <h3> Reservar </h3>
                </CardsButton>
            </div>
        </div>
    );
};

export default MediumCard;
