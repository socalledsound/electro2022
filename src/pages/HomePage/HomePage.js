import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../features/user/userSlice'
import UserHomePage from '../../features/user/UserHomePage/UserHomePage'
import SignInPage from '../../features/user/SignInPage/SignInPage'
import styles from './HomePage.module.css'
const HomePage = () => {
    const currentUser = useSelector(selectCurrentUser)
    return ( 
        <div className={styles.homePageContainer}>
            {
                currentUser ? 
                    <UserHomePage currentUser={currentUser}/>
                  :
                    <SignInPage />  
            }
        </div>
     );
}
 
export default HomePage;