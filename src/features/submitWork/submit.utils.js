export const createSubmission = ({assignment, currentUser, title, description, linkURL, codeURL, selectedImage}) => {
    const now = new Date().getTime();
    const image = selectedImage ? selectedImage : currentUser.avatar
    const submission = {
        timestamp: now,
        assignment,
        featured: false,
        user: currentUser,
        imageURL: image,
        title,
        description,
        linkURL,
        codeURL,
        
    }
    console.log(submission)
    return submission

}