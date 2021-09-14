import React from 'react'
import styles from './styles.module.scss'

export const LMBaseComponent: React.FC = ({children}) => {
    return (
        <div className={styles.cont}>
            {children}
        </div>
    )
}

export default LMBaseComponent