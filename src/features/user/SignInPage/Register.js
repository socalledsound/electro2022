import React from 'react'
import { useDispatch } from 'react-redux'
import useForm from '../../../utils/useForm'
import validateLogin from '../../../utils/validateLogin'
// import { registerUser } from '../userSlice'

import TextField from '../../../components/TextField/TextField'

import styles from './SignInPage.module.css'
import { emailRegisterStart } from '../../../app/sagas/userActions'

const Register = () => {

    const dispatch = useDispatch()
    const initialFormState = {
        displayName: '',
        email: '',
        password: '',
    }

    const submitFormData = (data) => {
        // dispatch(registerUser({type: 'REGISTER_NEW_USER', payload: data}))
        dispatch(emailRegisterStart(data))
    }


    const { formData, errors, handleInputChange, handleSubmit } = useForm(initialFormState, validateLogin, (formData) => submitFormData(formData))

    const  { displayName, email, password } = formData;

    return ( 
        <div className={styles.loginBG}>
           <div className={styles.formContainer}>
           <form onSubmit={handleSubmit}>
           <TextField 
                            value={displayName}
                            required
                            name='displayName'
                            onChange={handleInputChange}
                            error={errors.name}
                            placeholder='enter a displayName'
                        />
                        <TextField 
                            value={email}
                            required
                            name='email'
                            onChange={handleInputChange}
                            error={errors.email}
                            placeholder='enter email'
                        />
                        <TextField 
                            value={password}
                            required
                            name='password'
                            onChange={handleInputChange}
                            error={errors.password}
                            placeholder='enter password'
                        />
                        <button className={styles.submitButton} type='submit'>submit</button>
                        </form>
            </div>
        </div>
     );
}
 
export default Register;