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
            console.log(action.payload, 'sucess!')
            // const previousCritMessages = 
            return{
                ...state,
                messages: action.payload
            }
        },
        fetchCritMessagesFailure : (state, action) => {
            return {
                ...state,
                errors: action.payload,
            }
        }


    }
})

export const selectUserCritMessages = state => user => {
    if(user !== null){
        return state.critMessages.messages.filter(msg => msg.user === user.id)
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
 } = critMessagesSlice.actions

export default critMessagesSlice.reducer
