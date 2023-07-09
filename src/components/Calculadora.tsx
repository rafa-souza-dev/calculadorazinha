import { Button } from './Button'
import { Display } from './Display'
import styles from './Calculadora.module.css'

export function Calculadora() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <main className={styles.main}>
                    <Display />
                    <Button />
                </main>
            </div>
        </div>
    )
}
