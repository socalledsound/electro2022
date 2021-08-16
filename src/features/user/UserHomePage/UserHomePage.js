import React from 'react'
import styles from './UserHomePage.module.css'
const UserHomePage = ({currentUser}) => {
    console.log(currentUser)
    return ( 
        <div className={styles.userHomePageBorder}>
            <div className={styles.userHomePageWrapper}>

            home page for {currentUser.username} here

            </div>
            
        </div>
     );
}
 
export default UserHomePage;