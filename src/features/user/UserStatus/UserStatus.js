import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser } from '../userSlice'
import { startFetchUserWorks } from '../../gallery/gallerySlice'
import UserSettings from './UserSettings/UserSettings'
import UserWorks from './UserWorks'
import UserCritMessages from './UserCritMessages'
import styles from './UserStatus.module.css'
const UserStatus = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)

    useEffect(() => {
        dispatch(startFetchUserWorks(currentUser))
    }, [currentUser, dispatch])


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


