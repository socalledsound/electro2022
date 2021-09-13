import React from 'react'
import useForm from '../../utils/useForm'
import TextField from '../TextField/TextField'
import TextArea from '../TextArea/TextArea'
import styles from './EditWorkForm.module.css'
import { validateAssignmentSubmission } from '../../features/assignments/validateAssignmentSubmission'
const EditWorkForm = ({submitFormData, item, toggleModal}) => {

const initialFormState = {
    title: item.title,
    description: item.description,
    videoURL: item.videoURL,
    linkURL: item.linkURL,
    codeURL: item.codeURL,
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
                
                <button
                        type='submit' 
                        className={styles.confirmButton}
                        
                    >
                        confirm
                    </button>
                    <button 
                        className={styles.cancelButton}
                        onClick={() => toggleModal(false)}
                    >
                        cancel
                    </button>
               
        </form>
     );
}
 
export default EditWorkForm;