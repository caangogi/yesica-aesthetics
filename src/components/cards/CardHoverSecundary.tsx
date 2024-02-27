// CardHoverSecondary.tsx
import React from 'react';
import styles from '@/styles/components/cards/card_hover_secundary.module.scss';
import CardsButton from '@/components/buttons/CardsButton';

interface CardHoverSecondaryProps {
    title: string;
    includedServices: string[];
    durationService: string;
    packagePrice: number;
    backgroundImage: string;

}

const CardHoverSecondary: React.FC<CardHoverSecondaryProps> = ({ title, includedServices, durationService, packagePrice, backgroundImage }) => {
    return (
        <div className={styles.card_hover_secondary} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className={styles.card_hover_secondary_text_container}>
                <h3 className={styles.card_hover_secondary_title}>{title}</h3>
                <div className={styles.card_hover_secondary_services_container}>
                   <div className={styles.card_hover_secondary_services_content}>
                        <h4>Included Services:</h4>
                        <ul className={styles.card_hover_secondary_services_list}>
                            {includedServices.map((service, index) => (
                                <li key={index}>
                                    <span>&#10003;</span> 
                                    <p className={styles.card_hover_secondary_service_item}>{service}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.card_hover_secondary_footer}>
                        <div className={styles.card_hover_secondary_footer_text_container}>
                            <h4>Total Duration: {durationService} minutes </h4>
                            <h4>Package Price: £{packagePrice}</h4>
                        </div>
                        <div>
                        <div className={styles.card_hover_secondary_footer_btn_container}>

                            <CardsButton
                                onClick={() => alert('Hello world!')}
                                primary={false}
                            >
                                <h3>Reservar</h3>
                            </CardsButton>
                        </div>
                        </div>
                    </div>
                   
                </div>
                
            </div>
        </div>
    );
};

export default CardHoverSecondary;
