import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useForm from '../../utils/useForm'
import { selectCurrentUser } from '../user/userSlice'
import { startSubmitCritMessage } from './critMessagesSlice'
// import { validateAssignmentSubmission } from '../assignments/validateAssignmentSubmission'
import TextArea from '../../components/TextArea/TextArea'
import styles from './CritMessages.module.css'

const initialTextAreaState = {
    message: ''
}

const validateCritMessage = (msg) => {
    let errors = {}
    return errors
}

const SubmitCritMessageForm = ({item}) => {

    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)



    const submitCritMessage = (message) => {
        
        console.log(message, 'in submitCM')
        const data = {currentUser, message, workId: item.id}
        console.log(data)
        dispatch(startSubmitCritMessage(data))
        resetForm()
        
    }

    const { formData, errors, handleInputChange, handleSubmit, resetForm } = 
    useForm(initialTextAreaState, validateCritMessage, (formData) => submitCritMessage(formData))

    const { message } = formData

    return ( 
       
        <div className={styles.submitCritMessageWrapper}>
            <div className={styles.formWrapper}>
                <form onSubmit={handleSubmit}>
                                         <TextArea 
                        rows={4} 
                        cols={50} 
                        value={message}
                        required
                        name='message'
                        onChange={handleInputChange}
                        error={errors.message}
                        placeholder={`leave a message in response to the work`}
                    />  
                    <button type='submit' className={styles.submitMessageButton}>submit message</button>
                </form>
            </div>
        </div>
     );
}
 
export default SubmitCritMessageForm;