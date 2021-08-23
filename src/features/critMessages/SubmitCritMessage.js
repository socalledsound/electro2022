import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser } from '../user/userSlice'
import { startSubmitCritMessage } from './critMessagesSlice'
// import { validateAssignmentSubmission } from '../assignments/validateAssignmentSubmission'
import Form from '../../components/Form/Form'
import styles from './CritMessages.module.css'

const initialFormState = {
    message: ''
}

const validateCritMessage = (msg) => msg

const SubmitCritMessage= ({item}) => {

    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)
    const submitCritMessage = (message) => {

        dispatch(startSubmitCritMessage({currentUser, message}))

    }



    return ( 
       
        <div className={styles.submitCritMessageWrapper}>
            <div className={styles.formWrapper}>
                <Form 
                    initialFormState={initialFormState}
                    validateForm={validateCritMessage} 
                    submitFormData={submitCritMessage}     
                />
            </div>
        </div>
     );
}
 
export default SubmitCritMessage;