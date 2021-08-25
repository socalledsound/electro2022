import React from 'react'
import useForm from './useForm'
import TextField from '../TextField/TextField'
import TextArea from '../TextArea/TextArea'
import styles from './SubmitWorkForm.module.css'
import { validateAssignmentSubmission } from '../../features/assignments/validateAssignmentSubmission'
const SubmitWorkForm = ({submitFormData}) => {

const initialFormState = {
    title: '',
    description: '',
    videoURL: '',
    linkURL: '',
    codeURL: '',
}


     const { formData, errors, handleInputChange, handleSubmit } = 
                useForm(initialFormState, validateAssignmentSubmission, (formData) => submitFormData(formData))
    const {title, description, videoURL, linkURL, codeURL } = formData
    // console.log(keys);
    return ( 
        <form onSubmit={handleSubmit} className={styles.formWrapper}>
                    <TextField 
                        value={title}
                        required
                        name='title'
                        onChange={handleInputChange}
                        error={errors.title}
                        placeholder={`enter a title`}
                        style={{height: '2.5rem'}}
                    />
                     <TextArea 
                        rows={4} 
                        cols={50} 
                        value={description}
                        required
                        name='description'
                        onChange={handleInputChange}
                        error={errors.title}
                        placeholder={`enter a description of the work`}
                    />  
                    <TextField 
                        value={videoURL}
                        name='videoURL'
                        onChange={handleInputChange}
                        error={errors.videoURL}
                        placeholder={`link to a video`}
                        style={{height: '2.5rem'}}
                    /> 
                    <TextField 
                        value={linkURL}
                        name='linkURL'
                        onChange={handleInputChange}
                        error={errors.linkURL}
                        placeholder={`live site url`}
                        style={{height: '2.5rem'}}
                    /> 
                    <TextField 
                        value={codeURL}
                        name='codeURL'
                        onChange={handleInputChange}
                        error={errors.codeURL}
                        placeholder={`code repo url`}
                        style={{height: '2.5rem'}}
                    />             
                <button className={styles.submitFormButton} type='submit'>submit</button>
                {/* <button className={styles.cancelButton}>cancel</button> */}
        </form>
     );
}
 
export default SubmitWorkForm;