import styles from './Display.module.css';

interface DisplayProps {
    value: string;
    operation: string | null;
}

export function Display({
    value,
    operation
}: DisplayProps) {
    return (
        <div className={styles.container}>
            <span>{value}</span>
            <div>
                <p>M</p>
                {
                    operation && <p>{`Operação "${operation}"`}</p>
                }
            </div>
        </div>
    )
}
