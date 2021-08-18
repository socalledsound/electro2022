import React from 'react'
import UserCritMessages from '../UserStatus/UserCritMessages'
import styles from './UserHomePage.module.css'
const UserHomePage = ({currentUser}) => {
    console.log(currentUser)
    const { numCritMessages } = currentUser
    console.log(numCritMessages);
    const assignmentsCompleted = 3 

    return ( 
        <div className={styles.userHomePageBorder}>
            <div className={styles.userHomePageWrapper}>

            </div>
            
        </div>
     );
}
 
export default UserHomePage;