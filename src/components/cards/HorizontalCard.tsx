// HorizontalCard.tsx
import React from 'react';
import styles from '@/styles/components/cards/horizontal_card.module.scss';
import CardsButton from '@/components/buttons/CardsButton';

interface HorizontalCardProps {
    title: string;
    description: string;
    price: string;
    image: string;
    onClick: () => void;
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({ title, description, price, image, onClick }) => {
    return (
        <div className={styles.horizontal_card}>
            <div className={styles.hc_container}>
                <div className={styles.hc_text_container}>
                    <h2 className={styles.horizontal_card_title}>{title}</h2>
                    <p className={styles.horizontal_card_description}>{description}</p>
                    <h3 className={styles.horizontal_card_price}>{price}</h3>
                    <CardsButton onClick={onClick} primary><h3>Reservar</h3></CardsButton>
                </div>
                <div className={styles.hc_image_container} style={{ backgroundImage: `url(${image})` }} />
            </div>
        </div>
    );
};

export default HorizontalCard;