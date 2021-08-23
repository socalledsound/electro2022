import React from 'react'
import useTextArea from './useTextArea'
import styles from './TextArea.module.css'
const TextArea = ({initialState, validateTextArea, submitFormData, rows, cols}) => {
    

    const { formData, errors, handleInputChange, handleSubmit } = useTextArea(initialState, (formData) => submitFormData(formData), validateTextArea)

    const keys = Object.keys(initialState)
    return (
        <div className={styles.textAreaWrapper}>
        <form onSubmit={handleSubmit}>
        {
            keys.map(key => {
                return (
                    <textarea 
                    key={`textarea-${key}`}
                    rows={rows} 
                    cols={cols} 
                    name={`${key}`}
                    value={formData[key]}
                    required
                    onChange={handleInputChange}
                    error={errors.key}
                    placeholder={`enter a ${key} here`}
                />
                )
            })
        }
        <button className={styles.submitTextAreaButton} type='submit'>submit</button>
        </form> 
        </div>
     );
}
 
export default TextArea;