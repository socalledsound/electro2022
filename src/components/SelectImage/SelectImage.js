import React, { Fragment } from 'react'
import useFileModal from '../FileModal/useFileModal'
import styles from './SelectImage.module.css'

const SelectImage = () => {


    // const { modal, toggleModal, ModalContent } = useModal();
    const { imageURL, fileModal, toggleFileModal, SelectImageModal} = useFileModal()
    console.log(fileModal)
    return ( 
        <Fragment>
            <img src={imageURL} alt="" className={styles.image}/>
            <button className={styles.attachImageButton}
                onClick={toggleFileModal}
            > attach image</button>     
            <SelectImageModal />        
        </Fragment>


     );
}
 
export default SelectImage;