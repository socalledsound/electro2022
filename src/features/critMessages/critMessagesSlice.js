import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    messages: [{createdBy:{id:'xqWp0vWr3ENQwBOep8O6nrlCKgo1'}, text: 'hi there thius is really nice'}],
    errors: null,
    
}


export const critMessagesSlice = createSlice({
    name: 'critMessages',
    initialState,
    reducers: {
        critMessagesFailure  : (state, action) => {
            return {
                ...state,
                errors : action.payload
            }
        },

        critMessagesSuccess  : (state, action) => {
            return {
                ...state,
                messages: state.messages.concat(action.payload)
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

export const { critMessagesSuccess, critMessagesFailure  } = critMessagesSlice.actions

export default critMessagesSlice.reducer
