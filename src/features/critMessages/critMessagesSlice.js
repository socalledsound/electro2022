import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    messages: [{id: '00292', workId: 0, createdBy:{id:'xqWp0vWr3ENQwBOep8O6nrlCKgo1'}, text: 'hi there thius is really nice'}],
    errors: null,
    
}


export const critMessagesSlice = createSlice({
    name: 'critMessages',
    initialState,
    reducers: {

        startSubmitCritMessage : (state, action) => {
            return {
                ...state,
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

    }
})

export const selectUserCritMessages = state => user => {
    if(user !== null){
        return state.critMessages.messages.filter(msg => msg.createdBy.id === user.id)
    } else {
        return null
    } 
}

// export const selectCritMessagesForItemId = id => state => {
//     return (
//         [{id: 0, createdBy:{id:'xqWp0vWr3ENQwBOep8O6nrlCKgo1'}, text: 'hi there thius is really nice'}]
//     )
// }

export const selectCritMessagesForItemId = id => state => state.critMessages.messages.filter(item => item.workId === id)

export const { startSubmitCritMessage, submitCritMessageSuccess, submitCritMessageFailure } = critMessagesSlice.actions

export default critMessagesSlice.reducer
