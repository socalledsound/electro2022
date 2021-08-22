import React from 'react'
import useForm from './useForm'
import TextField from '../TextField/TextField'
import styles from './Form.module.css'
const Form = ({initialFormState, validateForm, submitFormData}) => {

    

     const { formData, errors, handleInputChange, handleSubmit } = 
                useForm(initialFormState, validateForm, (formData) => submitFormData(formData))
    const keys = Object.keys(formData)
    // console.log(keys);
    return ( 
        <form onSubmit={handleSubmit}>

            {
                keys.map(key => {
                    return (
                        <TextField 
                        key={key}
                        value={formData[key]}
                        required
                        name={`${key}`}
                        onChange={handleInputChange}
                        error={errors.key}
                        placeholder={`enter a ${key} here`}
            />
                    )
                })
            }
                <button className={styles.submitFormButton} type='submit'>submit</button>
                {/* <button className={styles.cancelButton}>cancel</button> */}
        </form>
     );
}
 
export default Form;