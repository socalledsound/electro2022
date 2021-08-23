import { createSlice } from '@reduxjs/toolkit'
// import { tempUser2 } from './TEMP_USERS'
const initialState = {
    currentUser: null,
    errors: null,
    userWorks: [],
    userCritMessages: [],
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
        },
        emailRegisterSuccess : (state, action) => {
            console.log(action.payload)
            return {
                ...state,
                currentUser: action.payload
            }
        },
        emailRegisterFailure : (state, action) => {
            console.log(action.payload)
            return {
                ...state,
                errors: action.payload
            }
        },

        emailSignInSuccess : (state, action) => {
            console.log(action.payload)
            return {
                ...state,
                currentUser: action.payload
            }
        },
        emailSignInFailure : (state, action) => {
            console.log(action.payload)
            return {
                ...state,
                errors: action.payload
            }
        }
    }
})

export const registerUser = (action) => {
    console.log(action)
}

export const selectLoginError = state => state.user.errors
export const selectCurrentUser = state => state.user.currentUser
export const selectUserWarnings = state => {
    // want to write a selector to check the assignments and see what's missing
    return state.user.warnings
}
export const { addUser, emailRegisterSuccess, emailRegisterFailure, emailSignInSuccess, emailSignInFailure  } = userSlice.actions 
export default userSlice.reducer