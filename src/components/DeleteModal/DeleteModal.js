import React from 'react'
import styles from './DeleteModal.module.css'
const DeleteModal = () => {


    const handleConfirm = () => {

    }

    const handleCancel = () => {
        
    }

    return ( 
        <div>
            are you sure you want to delete this item?
            you can't undo this.
            
            <div>
                <button
                    className={styles.confirmButton}
                    onClick={() => handleConfirm}
                >
                    confirm
                </button>
                <button 
                    className={styles.cancelButton}
                    onClick={() => handleCancel}
                >
                    cancel
                </button>
            </div>
        </div>
     );
}
 
export default DeleteModal;