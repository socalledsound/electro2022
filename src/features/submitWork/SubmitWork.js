import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { selectSelectedImage} from './submitWorkSlice'
import { selectCurrentUser } from '../user/userSlice'
import { submitWorkStart } from '../../app/sagas/submitWorkActions'

import SelectImage from '../../components/SelectImage/SelectImage'
import SubmitWorkForm from '../../components/Form-SubmitWork/SubmitWorkForm'
import styles from './SubmitWork.module.css'




const SubmitWork = ({assignment, history}) => {

   const dispatch = useDispatch()
   const currentUser = useSelector(selectCurrentUser)
   const selectedImage = useSelector(selectSelectedImage)

    const submitAssignment = (data) => {
        // const { title, description, linkURL, code, imageURL } = data
        console.log(data)
        dispatch(submitWorkStart({...data, assignment, currentUser, selectedImage}))
        // maybe this should go to the user page and run an animation?
        history.push('/userStatus')
    }



    return ( 
       
        <div className={styles.submitFormWrapper}>
 
            <div className={styles.attachImageDiv}>
                <SelectImage />
            </div>
            

            <div className={styles.formWrapper}>
            
                <p>assignment : {assignment}</p>
            
                <SubmitWorkForm submitFormData={submitAssignment} />
            </div>
        </div>
     );
}
 
export default withRouter(SubmitWork);