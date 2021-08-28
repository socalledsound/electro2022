import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { createTimeElapsed } from '../../utils/utils'
import { selectUserById } from '../people/peopleSlice'
import styles from './CritMessages.module.css'


const CritMessage = ({item}) => {
    // console.log(message.id)
    // console.log(message.user)
    const user = useSelector(selectUserById(item.user))

    const elapsed = createTimeElapsed(item.timestamp)

    return ( 
        <div className={styles.critMessageWrapper}>

        
        <div className={styles.critMessageContainer}>
           
                {
                    user&&
                    <Fragment>
                        <div className={styles.critMessageImageContainer}>
                            <img src={user.avatar} alt='user avatar' className={styles.avatar}/> 
                        </div>
                        <div className={styles.critMessageTitleSecondaryContainer}>
                           
                            <h5 className={styles.userName}>{user.displayName}</h5>
                            <p className={styles.elapsedTime}>{elapsed}</p>
                        </div>
                    </Fragment>
                }

           
            <div className={styles.critMessageBodyContainer}>
                {item.message}
                
            </div>
        </div>
        </div>
     );
}
 
export default CritMessage;