import React from 'react'
import { useDispatch } from 'react-redux'
import validateLogin from '../../../utils/validateLogin'
// import { addUser } from '../userSlice'
import { emailSignInStart } from '../../../app/sagas/userActions'
import LoginForm from '../../../components/Form-Login/LoginForm'
import styles from './SignInPage.module.css'

const Login = ({toggleRegistered}) => {

    const dispatch = useDispatch()


    const submitUserData = (data) => {
        dispatch(emailSignInStart(data))
    }

    return ( 
        <div className={styles.loginBG}>

            <div className={styles.formContainer}>
           <div className={styles.loginTitleCard}>
                existing user login:
            </div>
            <LoginForm 
                validateForm={validateLogin} 
                submitFormData={submitUserData}  
            />
            <div 
                className={styles.toggleRegisterButton}
                onClick={() => toggleRegistered(false)}>
                    <p>i need to register</p>
            </div>
            </div>

        </div>
     );
}
 
export default Login;