import React, { useState } from 'react'
import LogIn from './Login'
import Register from './Register'
import styles from './SignInPage.module.css'
const SignInPage = () => {

    const [registered, toggleRegistered ] = useState(true)


    return ( 
        <div className={styles.signInPageWrapper}>

            {
            registered ? 
                <LogIn toggleRegistered={toggleRegistered}/>
                :
                <Register />
            }


            
        </div>
     );
}
 
export default SignInPage;