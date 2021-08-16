import { createSlice } from '@reduxjs/toolkit'

const tempUser = {
        username: 'chris',
}

const initialState = {
    currentUser: null
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
export const { addUser } = userSlice.actions 
export default userSlice.reducer