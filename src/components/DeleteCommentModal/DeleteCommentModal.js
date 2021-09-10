import React from 'react'
import { useDispatch } from 'react-redux'
import { startDeleteCritMessage } from '../../features/critMessages/critMessagesSlice'
import styles from './DeleteCommentModal.module.css'
const DeleteCommentModal = ({item, toggleModal}) => {
    
    const dispatch = useDispatch()

    const handleConfirm = () => {
        console.log('confirm')
        dispatch(startDeleteCritMessage(item.id))
        toggleModal(false)
    }


    return ( 
        <div className={styles.deleteWrapper}>
            are you sure you want to delete this comment?
            you can't undo this.

            <div className={styles.messageContainer}>
                {item.message}
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
 
export default DeleteCommentModal;