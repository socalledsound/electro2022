import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
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

    const [textAreaState, resetTextAreaState] = useState(initialTextAreaState)

    const submitCritMessage = (message) => {
        console.log(message)
        const data = {currentUser, message, workId: item.id}
        dispatch(startSubmitCritMessage(data))
        resetTextAreaState(initialTextAreaState)

    }



    return ( 
       
        <div className={styles.submitCritMessageWrapper}>
            <div className={styles.formWrapper}>
                <TextArea 
                    initialState={textAreaState}
                    validateTextArea={validateCritMessage} 
                    submitFormData={submitCritMessage} 
                    rows={4}
                    cols={50}    
                />
            </div>
        </div>
     );
}
 
export default SubmitCritMessageForm;