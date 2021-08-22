import React from 'react'
import { useDispatch } from 'react-redux'
import validateLogin from '../../../utils/validateLogin'
import { addUser } from '../userSlice'
import Form from '../../../components/Form/Form'
import styles from './SignInPage.module.css'

const Login = () => {

    const dispatch = useDispatch()
    const initialFormState = {
        username: '',
        email: '',
        password: '',
    }

    const submitUserData = (data) => {
        dispatch(addUser(data))
    }




    return ( 
        <div className={styles.loginBG}>
           <div className={styles.formContainer}>
           <Form 
                    initialFormState={initialFormState}
                    validateForm={validateLogin} 
                    submitFormData={submitUserData}  
                />
            </div>
        </div>
     );
}
 
export default Login;