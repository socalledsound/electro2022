import React  from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentUser,selectLoginLoading } from '../userSlice'

import UserSettings from './UserSettings/UserSettings'
import UserWorks from './UserWorks'
import UserCritMessages from './UserCritMessages'
import Loading from '../../../components/Loading/Loading'
import styles from './UserStatus.module.css'
const UserStatus = () => {

    const currentUser = useSelector(selectCurrentUser)
    const loading = useSelector(selectLoginLoading)




    return ( 
        <div>
            {
                 currentUser ? 
                 <div className={styles.userWrapper}>
                        <UserSettings user={currentUser}/>
                        <UserCritMessages user={currentUser}/>
                        {
                            loading?
                            <Loading />
                            :
                            <UserWorks />
                        }

                        
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


