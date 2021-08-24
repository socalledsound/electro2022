export const createSubmission = ({assignment, currentUser, title, description, linkURL, codeURL, selectedImage}) => {
    const now = new Date().getTime();
    const submission = {
        timestamp: now,
        assignment,
        featured: false,
        user: currentUser,
        imageURL: selectedImage,
        title,
        description,
        linkURL,
        codeURL,
        
    }
    console.log(submission)
    return submission

}