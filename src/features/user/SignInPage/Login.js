import React from 'react'
import { useDispatch } from 'react-redux'
import validateLogin from '../../../utils/validateLogin'
// import { addUser } from '../userSlice'
import { emailSignInStart } from '../../../app/sagas/userActions'
import Form from '../../../components/Form/Form'
import styles from './SignInPage.module.css'

const Login = ({toggleRegistered}) => {

    const dispatch = useDispatch()
    const initialFormState = {
        email: '',
        password: '',
    }

    const submitUserData = (data) => {
        dispatch(emailSignInStart(data))
    }




    return ( 
        <div className={styles.loginBG}>

           <div className={styles.formContainer}>
           <div className={styles.loginTitleCard}>
                existing user login:
            </div>
           <Form 
                    initialFormState={initialFormState}
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