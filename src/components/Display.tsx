import styles from './Display.module.css';

interface DisplayProps {
    value: string;
    operation: string | null;
    haveDataInCalculatorMemory: boolean;
}

export function Display({
    value,
    operation,
    haveDataInCalculatorMemory
}: DisplayProps) {
    return (
        <div className={styles.container}>
            <span>{value}</span>
            <div>
                {
                    haveDataInCalculatorMemory && <p>M</p>
                }
                {
                    operation && <p>{`Operação "${operation}"`}</p>
                }
            </div>
        </div>
    )
}
