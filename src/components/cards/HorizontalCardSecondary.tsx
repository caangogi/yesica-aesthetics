import React from 'react';
import styles from '@/styles/components/cards/horizontal_card_secundary.module.scss';
import CardsButton from '@/components/buttons/CardsButton';

interface HorizontalCardSecondaryProps {
    title: string;
    price: string;
    image: string;
    onClick: () => void;
}

const HorizontalCardSecondary: React.FC<HorizontalCardSecondaryProps> = ({ title, price, image, onClick }) => {
    return (
        <div className={styles.horizontal_card_sec}>
            <div className={styles.hc_card_sec_image_container} style={{ backgroundImage: `url(${image})` }} />
            <div className={styles.hc_card_sec_text_container}>
                <h2 className={styles.horizontal_card_title}>{title}</h2>
                <h3 className={styles.horizontal_card_price}>{price}</h3>
                <CardsButton onClick={onClick}><h3>Reservar</h3></CardsButton>
            </div>
        </div>
    );
};

export default HorizontalCardSecondary;