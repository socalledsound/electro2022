import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { selectSelectedImage} from '../../submitWork/submitWorkSlice'
// import { selectCurrentUser } from '../user/userSlice'
import { startUpdateGalleryItem } from '../gallerySlice'
import UpdateImage from '../../../components/UpdateImage/UpdateImage'
import EditWorkForm from '../../../components/Form-EditWork/EditWorkForm'
import styles from './EditWork.module.css'




const EditWork = ({item, toggleModal, history}) => {

   const dispatch = useDispatch()
//    const currentUser = useSelector(selectCurrentUser)
   const selectedImage = useSelector(selectSelectedImage) || item.imageURL

    const submitItemUpdate = (data) => {
        // const { title, description, linkURL, code, imageURL } = data
        // console.log(data)
        // const itemMinusData = ({title, description, linkURL, code, imageURL})
        dispatch(startUpdateGalleryItem({ ...item, id: item.id, selectedImage,...data}))
        // maybe this should go to the user page and run an animation?
        history.push(`/gallery/${item.assignment}/${item.id}`)
        toggleModal(false)
    }



    return ( 
       
        <div className={styles.submitFormWrapper}>
 
            <div className={styles.attachImageDiv}>
                <UpdateImage item={item}/>
            </div>
            

            <div className={styles.formWrapper}>
            
            
                <EditWorkForm submitFormData={submitItemUpdate} item={item} toggleModal={toggleModal}/>
            </div>
        </div>
     );
}
 
export default withRouter(EditWork);