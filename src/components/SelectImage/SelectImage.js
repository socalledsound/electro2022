import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { selectPercentUploadedImg } from '../../features/submitWork/submitWorkSlice'
import Loading from '../Loading/Loading'
import useFileModal from '../FileModal/useFileModal'
import styles from './SelectImage.module.css'
import { selectCurrentUser } from '../../features/user/userSlice'

const SelectImage = () => {
    const currentUser = useSelector(selectCurrentUser)
    const defaultImage = currentUser.avatar
    const percentUploaded = useSelector(selectPercentUploadedImg)
    // const { modal, toggleModal, ModalContent } = useModal();
    const { imageURL, toggleFileModal, SelectImageModal} = useFileModal(defaultImage)
    console.log(imageURL)
    return ( 
        <Fragment>
            {
                percentUploaded > 0 ?
                <Loading />
                :
                <img src={imageURL} alt="" className={styles.image}/>
            }
            
            <button className={styles.attachImageButton}
                onClick={toggleFileModal}
            > attach image</button>     
            <SelectImageModal />        
        </Fragment>


     );
}
 
export default SelectImage;