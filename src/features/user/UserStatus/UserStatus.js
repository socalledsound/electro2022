import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../userSlice'
import UserSettings from './UserSettings'
import UserWorks from './UserWorks'
import UserCritMessages from './UserCritMessages'
import styles from './UserStatus.module.css'
const UserStatus = () => {

    const currentUser = useSelector(selectCurrentUser)
  
    return ( 
        <div>
            {
                 currentUser ? 
                 <div className={styles.userWrapper}>
                        <UserSettings user={currentUser}/>
                        <UserWorks />
                        <UserCritMessages user={currentUser}/>
                 </div>
                 :
                 <div>
                     <Link to='/'>log in </Link>again to see your status
                 </div>
            }
        </div>



     );
}
 
export default UserStatus;


