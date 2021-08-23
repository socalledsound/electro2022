import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { selectSelectedImage} from '../../../submitWork/submitWorkSlice'
import { selectCurrentUser } from '../../userSlice'
// import { submitWorkStart } from '../../../../app/sagas/submitWorkActions'
import { submitUserUpdateStart } from '../../userSlice'
import { validateUserSubmission } from './validateUserSubmission'
import SelectImage from '../../../../components/SelectImage/SelectImage'
import Form from '../../../../components/Form/Form'
import styles from './EditUserForm.module.css'

const initialFormState = {
    displayName: '',
}



const EditUserForm = ({assignment, history}) => {

   const dispatch = useDispatch()
   const currentUser = useSelector(selectCurrentUser)
   const selectedImage = useSelector(selectSelectedImage)

    const submitAssignment = (data) => {
        // const { title, description, linkURL, code, imageURL } = data
        console.log(data)
        dispatch(submitUserUpdateStart({...data, currentUser, selectedImage}))
        // maybe this should go to the user page and run an animation?
        history.push('/userStatus')
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
                    validateForm={validateUserSubmission} 
                    submitFormData={submitAssignment}     
                />
            </div>
        </div>
     );
}
 
export default withRouter(EditUserForm);