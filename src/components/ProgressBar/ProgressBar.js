import React from 'react'
import styles from './ProgressBar.module.css'
const ProgressBar = ({ percent, color}) => {
    return ( 
        <div className={styles.border}>
            <div className={styles.progress} style={{width: `${percent}%`, backgroundColor: `${color}`}}>
            </div>

        </div>
     );
}
 
export default ProgressBar;