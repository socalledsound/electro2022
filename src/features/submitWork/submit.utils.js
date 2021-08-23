export const createSubmission = ({assignment, currentUser, title, description, linkURL, codeURL, selectedImage}) => {
    const now = new Date().getTime();

    const submission = {
        // timestamp: firebase.firestore.FieldValue.serverTimestamp,
        timestamp: now,
        assignment,
        featured: false,
        createdBy: currentUser,
        imageURL: selectedImage,
        title,
        description,
        linkURL,
        codeURL,
        
    }
    
    return submission

}