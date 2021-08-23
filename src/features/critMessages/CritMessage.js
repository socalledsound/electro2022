import React from 'react'
import styles from './CritMessages.module.css'
const CritMessage = ({message}) => {
    console.log(message.id)
    return ( 
        <div className={styles.critMessageContainer}>
            <div className={styles.critMessageTitleContainer}>
                <h5>{message.createdBy.displayName}</h5>
                <img src={message.createdBy.avatar} alt='user avatar'/>
            </div>
            <div className={styles.critMessageBodyContainer}>
                {message.text}
            </div>
        </div>
     );
}
 
export default CritMessage;