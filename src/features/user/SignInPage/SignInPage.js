import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectLoginError } from '../userSlice'
import LogIn from './Login'
import Register from './Register'
import styles from './SignInPage.module.css'
const SignInPage = () => {

    const errors = useSelector(selectLoginError)
    const [registered, toggleRegistered ] = useState(true)
    console.log(registered)

    return ( 
        <div className={styles.signInPageWrapper}>

            {
            registered ? 
                <LogIn toggleRegistered={toggleRegistered}/>
                :
                <Register />
            }

            {
                errors &&
                <div>{errors}</div>
            }


            
        </div>
     );
}
 
export default SignInPage;