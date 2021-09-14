import React from 'react'
import { useSelector } from 'react-redux';
import { selectUnreadUserWorkMessages } from '../user/userSlice'
import styles from './UserNewMessages.module.css'
const UserNewMessages = ({currentUser}) => {

    const newMessages = useSelector(selectUnreadUserWorkMessages)

    return ( 
        <div className={styles.userNewMessagesWrapper}>
            <div className={styles.userNewMessagesContainer}>
                {/* {currentUser.displayName} */}
                {
                    newMessages &&
                    newMessages.map(msg => 
                        <div>
                            click through to see new messages about the following works
                            <div >
                                {msg.message}
                            </div>
                            
                        </div>
                        )
                }
            </div>
            
        </div>
     );
}
 
export default UserNewMessages;