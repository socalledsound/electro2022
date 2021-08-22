import React, { Fragment, useState } from 'react'
import firebase from '../../firebase/firebase.utils' 
import { isAuthorized, getMetaData, getImageFilePath } from './uploadImageUtils'
import tempImage from '../../assets/hvbrd.jpg'
import FileModal from './FileModal'
import ImagePicker from './ImagePicker'

export default function useFileModal(){
    let [ fileModal, toggleFileModal ] = useState(false)
    let [ image, setImage ] = useState(false)
    let [ imageURL, setImageURL] = useState(tempImage)
    let [file, setFile ] = useState(null)
    let [ percentUploaded, setPercentUploaded] = useState(0)
    console.log(percentUploaded)

    const setThumbnail = (file) => {
        const reader = new FileReader()
        reader.onload = ((f) => {
            return (e) => {
                console.log(e.target.result)
                setImage(e.target.result)
            }
        })()
        reader.readAsDataURL(file)
    }


    const addFile = (e) => {
        const file = e.target.files[0];
        const fileSize = file.size / 1024 /1024;
        if(file){
            if(fileSize > 1) {
                alert('file cannot be bigger than 1MB')
            }
            else {
                console.log(file)
                setFile(file)
                setThumbnail(file)
            }
            
        }    
    }

    const uploadFile = (file, metadata) => {
        const filePath = getImageFilePath()
        const storageRef = firebase.storage().ref()
        const uploadTask = storageRef.child(filePath).put(file, metadata)
        uploadTask.on('state_changed', snap => {
            const percentUploaded = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
            setPercentUploaded(percentUploaded)
            
        },
        err => {
            console.error(err);
            // this.setState({
            //     errors: this.state.errors.concat(err),
            //     uploadState: 'error',
            //     uploadTask: null
            // })
        },
        () => {
            uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
               
               //need to set the imageURL here
            //    this.setState({ imageURL: downloadURL, imageAttached: true, form: true})
                setImageURL(downloadURL)
            })
            .catch( err => {
                console.error(err);
                // this.setState({
                //     errors: this.state.errors.concat(err),
                //     uploadState: 'error',
                //     uploadTask: null
                // })
            })
        }    
        )
    
    
    } 
    

    const submitFile = () => {
        if(file !== null){
            if(isAuthorized(file.name)){
                const metadata = getMetaData(file)
                uploadFile(file, metadata);
                toggleFileModal(false);     
            }
        }
        else {
            alert('please check to see that the image file is less than 1MB')
        }

    }

    const SelectImageModal = ({children}) => {
        return (
            <Fragment>
                {
                    fileModal &&
                    <FileModal 
                        toggleFileModal={toggleFileModal}
                        fileModal={fileModal}
                    >

                        <ImagePicker image={image} addFile={addFile} submitFile={submitFile} setImage={setImage}/>
                    </FileModal>
                }
            </Fragment>
        )
     }

    return {imageURL, fileModal, toggleFileModal, SelectImageModal}
}