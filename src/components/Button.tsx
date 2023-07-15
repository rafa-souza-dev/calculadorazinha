import { variant } from '../@types/types';
import styles from './Button.module.css'

interface ButtonProps {
    slug: string;
    handleFunction: () => void;
    variant: variant
}

export function Button({
    handleFunction,
    slug,
    variant
}: ButtonProps) {
    function getVariant(variant: variant) {
        switch (variant) {
            case 'black':
                return 'variantBlack'
            case 'brass':
                return 'variantBrass'
            case 'silver':
                return 'variantSilver'
            case 'orange':
                return 'variantOrange'
        }   
    }

    const variantClass = getVariant(variant)

    console.log(styles[variantClass])

    return (
        <button
            className={styles.button + " " + styles[variantClass]} 
            onClick={handleFunction}
        >
            <span>{slug}</span>
        </button>
    )
}
