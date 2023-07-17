import { Button } from './Button'
import { Display } from './Display'
import styles from './Calculadora.module.css'
import { buttonsArray } from '../buttons'
import { useState } from 'react'
import { ButtonCalculator } from '../@types/types'

export function Calculadora() {
    const [displayValue, setDisplayValue] = useState("0")
    const [operation, setOperation] = useState<{
        operationSymbol: string | null;
        firstValue: string | null;
        secondValue: string | null;
    }>({
        operationSymbol: null,
        firstValue: null,
        secondValue: null
    })
    const [memoryValue, setMemoryValue] = useState<string | null>(null)

    function updateDisplayValue(slug: string) {
        setDisplayValue(state => {
            if (slug === '.' && state.includes('.')) {
                return state
            }

            if (state === '0' && slug !== '.' && !operation.operationSymbol) {
                return slug
            }

            if (state === '0' && slug === '.') {
                return state
            }

            if (state === '0' && slug === '0') {
                return slug
            }

            if (isCompleteSetupOperation) {
                setOperation(operationState => ({
                    ...operationState,
                    secondValue: state + slug
                }))

                return state + slug
            }

            if (
                !!operation.operationSymbol && 
                !!operation.firstValue 
            ) {
                setOperation(state => ({
                    ...state,
                    secondValue: slug
                }))

                return slug
            }

            return state + slug
        })
    }

    function updateOperation(slug: string) {
        setOperation(state => {
            if (
                !!state.operationSymbol &&
                !!state.firstValue &&
                !!state.secondValue
            ) {
                setDisplayValue(operationResult)

                return {
                    operationSymbol: slug,
                    firstValue: operationResult,
                    secondValue: null
                }
            }

            return {
                ...state,
                operationSymbol: slug,
                firstValue: displayValue
            }
        })
    }

    function calculateOperation(): string {
        const firstValueAsNumber = Number(operation.firstValue)
        const secondValueAsNumber = Number(operation.secondValue)
    
        if (operation.operationSymbol === "+") {
            return String(firstValueAsNumber + secondValueAsNumber)
        }
    
        if (operation.operationSymbol === "-") {
            return String(firstValueAsNumber - secondValueAsNumber)
        }
    
        if (operation.operationSymbol === "x") {
            return String(firstValueAsNumber * secondValueAsNumber)
        }
    
        if (operation.operationSymbol === "/") {
            return String(firstValueAsNumber / secondValueAsNumber)
        }
    
        return ""
    }

    function handleButtonCalculator(button: ButtonCalculator) {
        if (button.type === 'drawable') {
            updateDisplayValue(button.slug)
        }

        if (button.type === 'operator') {
            updateOperation(button.slug)
        }

        if (button.slug === '=' && isCompleteSetupOperation) {
            setDisplayValue(operationResult)

            setOperation({
                operationSymbol: null,
                firstValue: null,
                secondValue: null
            })
        }
    }

    const isCompleteSetupOperation = !!operation.operationSymbol && 
        !!operation.firstValue &&
        !!operation.secondValue

    const operationResult = calculateOperation()
    const haveDataInCalculatorMemory = !!memoryValue

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <main className={styles.main}>
                    <Display 
                        value={displayValue}
                        operation={operation.operationSymbol}
                        haveDataInCalculatorMemory={haveDataInCalculatorMemory}
                    />
                    <div className={styles.keyboard}>
                        {buttonsArray.map(button => (
                            <Button 
                                key={button.id}
                                slug={button.slug}
                                handleFunction={() => handleButtonCalculator(button)}
                                variant={button.variant}
                            />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    )
}
