import React from 'react'
import styles from './ImagePicker.module.css'
const ImagePicker = ({image, addFile, submitFile, setImage}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return ( 
        <div className={styles.imagePickerWrapper}>
                   
            {
                image ?
                <img src={image} alt='user selected' className={styles.imagePickerImage}></img>
                :
                <div>
                <h5>select an image file:</h5>
                <form onSubmit={(e) => handleSubmit(e)}>
                <input 
                className={styles.chooseFileButton}
                type="file" 
                name="file" 
                onChange={(e) => addFile(e)} 
            />
            </form>
            </div>
            }
        <div>
        <button 
                className={styles.imagePickerButton }
                onClick={submitFile}
            >
                upload
            </button>
            <button 
                className={styles.imagePickerCancelButton}
                onClick={() => setImage(false)}
            >
                clear image
            </button>
        </div>
 
        </div>
     );
}
 
export default ImagePicker;