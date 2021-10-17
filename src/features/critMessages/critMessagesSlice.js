import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    messages: [],
    errors: null,
    
}


export const critMessagesSlice = createSlice({
    name: 'critMessages',
    initialState,
    reducers: {
        startUpdateCritMessage(){},
        startSubmitCritMessage(){},
        startDeleteCritMessage(){},
        updateCritMessageSuccess: (state, action) => {
            console.log(action.payload, 'in update success')
            const otherMessages = state.messages.filter( msg => msg.id !== action.payload.id)
            const thisMessage = state.messages.filter(msg => msg.id === action.payload.id)[0]
            const newMessage = {...thisMessage, message: action.payload.update.message}
            return {
                ...state,
                messages: otherMessages.concat(newMessage)
            }
        }, 
        updateCritMessageFailure : (state, action) => {
            console.log(action.payload)
            return {
                ...state,
                errors : action.payload
            }
        },
        deleteCritMessageSuccess: (state, action) => {    
            console.log('delete crit message success', action.payload)
            const newMessages = state.messages.filter((item) => item.id !== action.payload)
            console.log(newMessages)
            return {
                ...state,
                messages: newMessages
            }
        }, 
        deleteCritMessageFailure : (state, action) => {
            return {
                ...state,
                errors : action.payload
            }
        },
        submitCritMessageFailure  : (state, action) => {
            return {
                ...state,
                errors : action.payload
            }
        },

        submitCritMessageSuccess  : (state, action) => {
            return {
                ...state,

            }
        },
        fetchCritMessagesStart(){},
        fetchCritMessagesSuccess : (state, action) => {
            // const oldMessages = booksData.filter(book => !newData.some(newBook => newBook.code === book.code));
            // return oldBooks.concat(newData);
            const oldMessages = state.messages
            const result = [...action.payload, ...oldMessages].reduce((res, data, index, arr) => {
                if (res.findIndex(message => message.id === data.id ) < 0) { 
                    res.push(data);
              
                }  
                return res;
              }, [])

            return{
                ...state,
                messages: result
            }
        },
        fetchCritMessagesFailure : (state, action) => {
            console.log(action.payload)
            return {
                ...state,
                errors: action.payload,
            }
        },
        fetchUserCritMessagesStart(){}, 
    }
})

export const selectUserCritMessages = user => state => {
    if(user !== null){
        console.log(state)
        const messages = state.critMessages.messages || []
        return messages.filter(msg => msg.user === user.id)
    } else {
        return null
    } 
}

export const selectCritMessages = state => state.critMessages.messages

// export const selectCritMessagesForItemId = id => state => {
//     return (
//         [{id: 0, createdBy:{id:'xqWp0vWr3ENQwBOep8O6nrlCKgo1'}, text: 'hi there thius is really nice'}]
//     )
// }

export const selectCritMessagesForItemId = id => state => { 
    // console.log(id)
    const arr = state.critMessages.messages.filter(item => {
        // console.log(item.workId, id)
        return item.workId === id
    })
    return arr
}

export const selectCritMessagesForUserId = id => state => {
    const arr = state.critMessages.messages.filter(item => {
        return item.user === id
    })
    if(arr.length > 0){
        return arr
    } else {
        return 0
    }
    
}


export const { startUpdateCritMessage, startDeleteCritMessage, startSubmitCritMessage, submitCritMessageSuccess, submitCritMessageFailure,
    fetchCritMessagesStart, fetchCritMessagesSuccess, fetchCritMessagesFailure, 
    deleteCritMessageSuccess, deleteCritMessageFailure,
    updateCritMessageSuccess, updateCritMessageFailure,
    fetchUserCritMessagesStart,
 } = critMessagesSlice.actions

export default critMessagesSlice.reducer
