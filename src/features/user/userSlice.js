import { createSlice } from '@reduxjs/toolkit'
import { selectWorks } from '../gallery/gallerySlice'
// import { tempUser2 } from './TEMP_USERS'
const initialState = {
    currentUser: null,
    errors: null,
    loading: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        emailSignInSuccess : (state, action) => {
            // console.log(action.payload)
            return {
                ...state,
                currentUser: action.payload
            }
        },
        emailSignInFailure : (state, action) => {
            // console.log(action.payload)
            return {
                ...state,
                errors: action.payload
            }
        },
        resetLoginErrors : (state) => {
            return {
                ...state,
                errors: null,
            }
        },
        loginLoading : (state, action) => {
            return {
                ...state,
                loading: action.payload
            }
        },
        logOutUser : (state) => {
            return {
                ...state,
                currentUser: null,
            }
        },
        submitUserUpdateStart (){},
        updateUserSuccess : (state, action) => {
            return {
                ...state,
                currentUser : action.payload
            }
        },
        updateUserfailure : (state, action) => {
            return {
                ...state,
                errors: action.payload
            }
        },


    }
})

export const selectLoginError = state => state.user.errors
export const selectLoginLoading = state => state.user.loading
export const selectCurrentUser = state => state.user.currentUser
export const selectCompletedAssignments = state => {
    const allWorks = selectWorks(state)
    const user = selectCurrentUser(state)
    // console.log(allWorks, user)
    if(allWorks && user){
        const userWorks = allWorks.filter(item => {
            // console.log(item, user.id)
            return item.user.id === user.id
        })
        return userWorks
    } else {
        return null
    }
}

export const selectUserCritMessages = state => {
    
    const user = selectCurrentUser(state)
    const messages = selectUserCritMessages(state)(user)
    return messages
}

export const selectUserWarnings = state => {
    // want to write a selector to check the assignments and see what's missing
    return state.user.warnings
}
export const { addUser, logOutUser, resetLoginErrors, emailSignInSuccess, 
    emailSignInFailure, loginLoading, 
    submitUserUpdateStart, updateUserSuccess,updateUserFailure,
    } = userSlice.actions 
export default userSlice.reducer