import React from 'react'
import ReactDOM from "react-dom"
import styles from './FileModal.module.css'

const FileModal = ({ toggleFileModal, fileModal, children}) => {
    
   if(fileModal){
    return ReactDOM.createPortal( 
        <div className={styles.fileModalContainer}>
            <div className={styles.fileModalBody}>
                <button
                 className={styles.closeFileModalButton}
                onClick={() => toggleFileModal(false)}
                > 
                &times;
                </button>
                <div>
                    {children}
                </div>
            </div>
        </div>,
        document.querySelector('#file-modal-root')
     );
   } else{
    return null
   }
}
 
export default FileModal;