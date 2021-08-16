import React from 'react'
import { useDispatch } from 'react-redux'
import useForm from '../../../utils/useForm'
import validateLogin from '../../../utils/validateLogin'
import { addUser } from '../userSlice'

import TextField from '../../../components/TextField/TextField'

import styles from './SignInPage.module.css'

const Register = () => {

    const dispatch = useDispatch()
    const initialFormState = {
        username: '',
        email: '',
        password: '',
    }

    const submitFormData = (data) => {
        dispatch(addUser(data))
    }


    const { formData, errors, handleInputChange, handleSubmit } = useForm(initialFormState, validateLogin, (formData) => submitFormData(formData))

    const  { username, email, password } = formData;

    return ( 
        <div className={styles.loginBG}>
           <div className={styles.formContainer}>
           <form onSubmit={handleSubmit}>
           <TextField 
                            value={username}
                            required
                            name='username'
                            onChange={handleInputChange}
                            error={errors.name}
                            placeholder='enter username'
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