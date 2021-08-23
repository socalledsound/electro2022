import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../userSlice'
import UserSettings from './UserSettings/UserSettings'
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
                        <UserCritMessages user={currentUser}/>
                        <UserWorks />
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


