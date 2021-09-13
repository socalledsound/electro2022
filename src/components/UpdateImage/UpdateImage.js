import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { selectPercentUploadedImg, selectSelectedImage } from '../../features/submitWork/submitWorkSlice'
import Loading from '../Loading/Loading'
import useFileModal from '../FileModal/useFileModal'
import styles from './UpdateImage.module.css'
// import { selectCurrentUser } from '../../features/user/userSlice'


const UpdateImage = ({item}) => {
    console.log(item)
    const selectedImage = useSelector(selectSelectedImage)
    const defaultImage = item.imageURL
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
                <img src={selectedImage ? selectedImage : imageURL} alt="" className={styles.image}/>
            }
            
            <button className={styles.attachImageButton}
                onClick={toggleFileModal}
            > attach image</button>     
            <SelectImageModal />        
        </Fragment>


     );
}
 
export default UpdateImage;