import React from 'react'
import styles from './People.module.css'
const PersonDetail = ({person}) => {
    return ( 
        <div className={styles.personDetailContainer}>
            {person.displayName}
        </div>
     );
}
 
export default PersonDetail;