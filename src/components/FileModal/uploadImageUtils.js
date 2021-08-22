import mime from 'mime-types';
import uuidv4 from 'uuid/v4';
import firebase from '../../firebase/firebase.utils' 

export const isAuthorized = filename => ['image/jpeg', 'image/png'].includes(mime.lookup(filename));

export const getMetaData = file => ({ contentType: mime.lookup(file.name)})

export const getImageFilePath = () =>  `images/${uuidv4()}.jpg`

export const uploadFile = (file, metadata) => {
    const filePath = `images/${uuidv4()}.jpg`
    const storageRef = firebase.storage().ref()
    const uploadTask = storageRef.child(filePath).put(file, metadata)
    uploadTask.on('state_changed', snap => {
        const percentUploaded = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
        // set this somewhere?
        console.log(percentUploaded)
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
           //  this.sendFileMessage(downloadURL, ref, pathToUpload);
           //need to set the imageURL here
        //    this.setState({ imageURL: downloadURL, imageAttached: true, form: true})
        })
        .catch( err => {
            console.error(err);
            this.setState({
                errors: this.state.errors.concat(err),
                uploadState: 'error',
                uploadTask: null
            })
        })
    }    
    )


} 




// uploadFile = (file, metadata) => {
//     // const pathToUpload = this.state.channel.id;
//     // const ref = this.props.messagesRef;
//     const filePath = `images/${uuidv4()}.jpg`;

//     this.setState({ 
//         uploadState: 'uploading',
//         uploadTask: this.state.storageref.child(filePath).put(file, metadata)
//     },
//          () => {
//              this.state.uploadTask.on('state_changed', snap => {
//                  const percentUploaded = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
//                  this.setState({ percentUploaded })
//              },
//              err => {
//                  console.error(err);
//                  this.setState({
//                      errors: this.state.errors.concat(err),
//                      uploadState: 'error',
//                      uploadTask: null
//                  })
//              },
//              () => {
//                  this.state.uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
//                     //  this.sendFileMessage(downloadURL, ref, pathToUpload);
//                     this.setState({ imageURL: downloadURL, imageAttached: true, form: true})
//                  })
//                  .catch( err => {
//                      console.error(err);
//                      this.setState({
//                          errors: this.state.errors.concat(err),
//                          uploadState: 'error',
//                          uploadTask: null
//                      })
//                  })
//              }    
//              )
//          }
//     )
//  }
