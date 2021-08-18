import { createSlice } from '@reduxjs/toolkit'

const tempUser = {
    id: 0,
    displayName: 'chris',
    email: 'socalledsound@gmail.com',
    created: Date.now(),
    numFeedbackMessages: 0,
    numCritMessages: 0,
    avatar: 'https://firebasestorage.googleapis.com/v0/b/side-effects-7f7e8.appspot.com/o/images%2F7fe6ba0a-e2c1-4636-9178-fc2f736006ed.jpg?alt=media&token=8f177fe1-1628-4338-a081-cfd5686bc36d',
    completedAssignments : [],

}

const initialState = {
    currentUser: tempUser
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            return {
                ...state,
                currentUser: action.payload
            }
        }
    }
})




export const selectCurrentUser = state => state.user.currentUser
export const selectUserWarnings = state => {
    // want to write a selector to check the assignments and see what's missing
    return state.user.warnings
}
export const { addUser } = userSlice.actions 
export default userSlice.reducer