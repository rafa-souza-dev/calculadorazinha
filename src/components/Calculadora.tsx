import { Button } from './Button'
import { Display } from './Display'
import styles from './Calculadora.module.css'
import { buttonsArray } from '../buttons'

export function Calculadora() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <main className={styles.main}>
                    <Display />
                    <div className={styles.keyboard}>
                        {buttonsArray.map(button => (
                            <Button 
                                key={button.id}
                                slug={button.slug}
                                handleFunction={button.handleFunction}
                                variant={button.variant}
                            />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    )
}
