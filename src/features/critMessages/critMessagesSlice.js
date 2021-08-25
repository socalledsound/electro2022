import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    messages: [
        {
            id: '00292', 
            workId: 'FofKrnSk5XNHBuFWekwM', 
            user: 'xqWp0vWr3ENQwBOep8O6nrlCKgo1', 
            text: 'hi there thius is really nice'  
        }
    ],
    errors: null,
    
}


export const critMessagesSlice = createSlice({
    name: 'critMessages',
    initialState,
    reducers: {

        startSubmitCritMessage(){},

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

    }
})

export const selectUserCritMessages = state => user => {
    if(user !== null){
        return state.critMessages.messages.filter(msg => msg.createdBy.id === user.id)
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
    
    console.log(id)
    const arr = state.critMessages.messages.filter(item => {
        console.log(item.workId, id)
        return item.workId === id
    })
    
    return arr
}
export const { startSubmitCritMessage, submitCritMessageSuccess, submitCritMessageFailure } = critMessagesSlice.actions

export default critMessagesSlice.reducer
