import React from 'react'
import styles from './ImagePicker.module.css'
const ImagePicker = ({image, addFile, submitFile, setImage}) => {
    return ( 
        <div className={styles.imagePickerWrapper}>
                   
            {
                image ?
                <img src={image} alt='user selected'></img>
                :
                <div>
                <h5>select an image file:</h5>
                <input 
                className={styles.chooseFileButton}
                type="file" 
                name="file" 
                onChange={(e) => addFile(e)} 
            />
            </div>
            }
        <div>
        <button 
                className={styles.uploadButton}
                onClick={submitFile}
            >
                upload
            </button>
            <button 
                className={styles.cancelButton}
                onClick={() => setImage(false)}
            >
                clear image
            </button>
        </div>
 
        </div>
     );
}
 
export default ImagePicker;