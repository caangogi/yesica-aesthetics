// SecondaryButton.tsx
import React from 'react';
import styles from '@/styles/components/buttons/secundary_button.module.scss';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    primary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, primary = true }) => {
    const buttonClassName = primary ? styles.button__primary : styles.button__secondary;

    return (
        <button className={buttonClassName} onClick={onClick}>
            <span className={styles.button__text}>{children}</span>
        </button>
    );
};

export default Button;