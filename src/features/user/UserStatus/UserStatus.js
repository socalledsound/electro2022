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
                 <div className={styles.loginAgainWrapper}>

                    <div className={styles.logInAgainContainer}>
                        <Link to='/' className={styles.logInAgainButton}>log in </Link>
                        <div></div> 
                    </div>
                    <p>to see your status</p>
                 </div>

            }
        </div>



     );
}
 
export default UserStatus;


