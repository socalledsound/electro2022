
const example = {
id: '00292', 
workId: 'FofKrnSk5XNHBuFWekwM', 
user: `user here`, 
text: 'hi there thius is really nice'
}


export const createCritMessageSubmission = (data) => {
    const {currentUser, message, workId} = data

    const submission = {
        workId,
        user: currentUser.id,
        text: message, 
    }

    return submission
}