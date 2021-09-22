
import React from 'react'
import useForm from '../../utils/useForm'
import TextField from '../TextField/TextField'
import styles from './LoginForm.module.css'
import { validateAssignmentSubmission } from '../../features/assignments/validateAssignmentSubmission'
const EditWorkForm = ({submitFormData, item, toggleModal}) => {
    
    const initialFormState = {
        email: '',
        password: '',
    }


     const { formData, errors, handleInputChange, handleSubmit } = 
                useForm(initialFormState, validateAssignmentSubmission, (formData) => submitFormData(formData))
    const {email, password } = formData
    // console.log(keys);
    return ( 
        <form onSubmit={handleSubmit} className={styles.formWrapper}>
                    <TextField 
                        value={email}
                        required
                        name='email'
                        onChange={handleInputChange}
                        error={errors.email}
                        placeholder={`enter your email`}
                        style={{height: '2.5rem'}}
                    />
 
                    <TextField 
                        value={password}
                        name='password'
                        onChange={handleInputChange}
                        error={errors.password}
                        placeholder={`enter your password`}
                        style={{height: '2.5rem'}}
                    /> 
                            
                
                    <button className={styles.submitFormButton} type='submit'>submit</button>
               
        </form>
     );
}
 
export default EditWorkForm;