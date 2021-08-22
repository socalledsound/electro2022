import React from 'react'
import { withRouter } from 'react-router-dom'
import { validateAssignmentSubmission } from './validateAssignmentSubmission'
import SelectImage from '../../components/SelectImage/SelectImage'
import Form from '../../components/Form/Form'
import styles from './SubmitWork.module.css'

const initialFormState = {
    title: '',
    description: '',
    linkURL: '',
    codeURL: '',
}



const SubmitWork = ({assignment, history}) => {

    // const  { title, description , siteURL, repoURL} = formData;

    const submitAssignment = (values) => {
        console.log(values)
        // maybe this should go to the user page and run an animation?
        history.push('/gallery')
    }



    return ( 
       
        <div className={styles.submitFormWrapper}>
 
            <div className={styles.attachImageDiv}>
                <SelectImage />
            </div>
            

            <div className={styles.formWrapper}>
            
                <p>{assignment}</p>
            
                <Form 
                    initialFormState={initialFormState}
                    validateForm={validateAssignmentSubmission} 
                    submitFormData={submitAssignment}  
                />
            </div>
        </div>
     );
}
 
export default withRouter(SubmitWork);