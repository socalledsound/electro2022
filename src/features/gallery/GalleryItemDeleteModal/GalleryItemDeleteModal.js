import React from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { startDeleteGalleryItem } from '../gallerySlice'
import styles from './GalleryItemDeleteModal.module.css'

const GalleryItemDeleteModal = ({item, toggleModal, history}) => {
    console.log(item)
    const dispatch = useDispatch()

    const handleConfirm = () => {
        console.log('confirm')
        dispatch(startDeleteGalleryItem(item.id))
        toggleModal(false)
        history.push('/gallery')
    }


    return ( 
        <div className={styles.deleteWrapper}>
            are you sure you want to delete this item?
            you can't undo this.

            <div className={styles.itemContainer}>
                <div className={styles.deleteItemRow}>
                    <div>
                        <img className={styles.galleryItemDeleteImage} src={item.imageURL} alt="artwork" />
                        <h4>{item.user.displayName}</h4>
                    </div>
                    <div className={styles.deleteItemInfo}> 
                        <h5>{item.title}</h5>
                        
                        <p>{item.description}</p>
                    </div>
                    <div className={styles.deleteItemLinks}>
                        {
                            item.linkURL &&
                            <p>live site: <a href={item.linkURL}>{item.linkURL}</a></p>
                        }
                        {
                            item.codeURL &&
                            <p>code: <a href={item.codeURL}>{item.codeURL}</a></p>
                        }
                    </div>
                    
 
                </div>
            </div>

            
            <div className={styles.buttonRow}>
                <button
                    className={styles.confirmButton}
                    onClick={handleConfirm}
                >
                    confirm
                </button>
                <button 
                    className={styles.cancelButton}
                    onClick={() => toggleModal(false)}
                >
                    cancel
                </button>
            </div>
        </div>
     );
}
 
export default withRouter(GalleryItemDeleteModal);