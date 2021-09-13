import React from 'react'
import { useDispatch } from 'react-redux'
import useForm from '../../../utils/useForm'
import { startUpdateGalleryItem } from '../gallerySlice'
import TextArea from '../../../components/TextArea/TextArea'
import styles from './GalleryItemEditModal.module.css'
const GalleryItemEditModal = ({item, toggleModal}) => {

    const dispatch = useDispatch()
   

    const initialTextAreaState = {
        message: item.message
    }

    const validateCritMessage = (msg) => {
        let errors = {}
        return errors
    }

    const submitCritMessage = (message) => {
        
        console.log(message, 'in submitCM')
        const data = { message: message.message, itemId: item.id }
        console.log(data)
        dispatch(startUpdateGalleryItem(data))
        //resetForm()
        toggleModal(false)
        
    }

    const { formData, errors, handleInputChange, handleSubmit } = 
    useForm(initialTextAreaState, validateCritMessage, (formData) => submitCritMessage(formData))

    const { message } = formData


    return ( 
        <div className={styles.editCommentWrapper}>
                        <div className={styles.formWrapper}>
                <form onSubmit={handleSubmit}>
                    <TextArea 
                        rows={4} 
                        cols={50} 
                        value={message}
                        required
                        name='message'
                        onChange={handleInputChange}
                        error={errors.message}
                        placeholder={`leave a message in response to the work`}
                    />  
                    <button
                        type='submit' 
                        className={styles.confirmButton}
                        
                    >
                        confirm
                    </button>
                    <button 
                        className={styles.cancelButton}
                        onClick={() => toggleModal(false)}
                    >
                        cancel
                    </button>
                    
                </form>
            </div>
            
            <div>

            </div>
        </div>
     );
}
 
export default GalleryItemEditModal;