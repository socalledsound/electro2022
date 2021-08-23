import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { selectPercentUploadedImg } from '../../features/submitWork/submitWorkSlice'
import Loading from '../Loading/Loading'
import useFileModal from '../FileModal/useFileModal'
import styles from './SelectImage.module.css'

const SelectImage = () => {

    const percentUploaded = useSelector(selectPercentUploadedImg)
    // const { modal, toggleModal, ModalContent } = useModal();
    const { imageURL, toggleFileModal, SelectImageModal} = useFileModal()
    console.log(percentUploaded)
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