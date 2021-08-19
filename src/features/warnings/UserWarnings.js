import React from 'react'
import styles from './UserWarnings.module.css'
const UserWarnings = ({warnings}) => {
    return ( 
        <div className={styles.userWarningsWrapper}>
            {warnings}
        </div>
     );
}
 
export default UserWarnings;