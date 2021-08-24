import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
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



const EditUserForm = ({assignment, toggleModal}) => {

   const dispatch = useDispatch()
   const currentUser = useSelector(selectCurrentUser)
   const selectedImage = useSelector(selectSelectedImage)

    const submitUserData = (data) => {
        dispatch(submitUserUpdateStart({...data, currentUser, selectedImage}))
        toggleModal(false)
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
                    submitFormData={submitUserData}     
                />
            </div>
        </div>
     );
}
 
export default EditUserForm;