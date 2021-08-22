import { createSlice } from '@reduxjs/toolkit'
import { tempUser2 } from './TEMP_USERS'
const initialState = {
    currentUser: null,
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