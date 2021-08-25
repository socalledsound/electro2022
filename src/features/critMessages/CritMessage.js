import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { selectUserById } from '../people/peopleSlice'
import styles from './CritMessages.module.css'
const CritMessage = ({message}) => {
    console.log(message.id)
    console.log(message.user)
    const user = useSelector(selectUserById(message.user))
    console.log(user)
    return ( 
        <div className={styles.critMessageWrapper}>

        
        <div className={styles.critMessageContainer}>
            <div className={styles.critMessageTitleContainer}>
                {
                    user&&
                    <Fragment>
                         <img src={user.avatar} alt='user avatar' className={styles.avatar}/>    
                         <h5>{user.displayName} says:</h5>
                   
                    </Fragment>
                }

            </div>
            <div className={styles.critMessageBodyContainer}>
                {message.text}
            </div>
        </div>
        </div>
     );
}
 
export default CritMessage;