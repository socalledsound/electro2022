import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectLoginError, resetLoginErrors, selectLoginLoading } from '../userSlice'
import Loading from '../../../components/Loading/Loading'
import LogIn from './Login'
import Register from './Register'
import styles from './SignInPage.module.css'
const SignInPage = ({currentUser}) => {
    const dispatch = useDispatch()
    const loading = useSelector(selectLoginLoading)
    const errors = useSelector(selectLoginError)
    const [registered, toggleRegistered ] = useState(true)
    // console.log(registered)
    console.log(loading, registered, errors)
    return ( 
        <div className={styles.signInPageWrapper}>

            {
            loading ? 
            <Loading />
            :
            !errors ? 

                registered ?
                
                <LogIn toggleRegistered={toggleRegistered}/>
                :
                <Register toggleRegistered={toggleRegistered}/>
            :
            <div className={styles.failureWrapper}>
                <div>
                {errors} 
                </div>
                <div
                    className={styles.tryAgainButton} 
                    onClick={() => dispatch(resetLoginErrors())}
                >
                    
                    try again?
                </div>
            </div>
            
            }
            
        </div>
     );
}
 
export default SignInPage;