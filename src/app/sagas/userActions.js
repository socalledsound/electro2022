import UserActionTypes from "./UserActionTypes"

export const emailSignInStart = (emailAndPassword) => ({
    type: UserActionTypes.EMAIL_SIGNIN_START,
    payload: emailAndPassword,
})

export const emailSignInSuccess = (emailAndPassword) => ({
    type: UserActionTypes.EMAIL_SIGNIN_SUCCESS,
    payload: emailAndPassword,
})

export const emailSignInFailure = (error) => ({
    type: UserActionTypes.EMAIL_SIGNIN_FAILURE,  
    payload : error
})

export const emailRegisterStart = (formData) => ({
    type: UserActionTypes.EMAIL_REGISTER_START,
    payload: formData,
})

// export const emailRegisterSuccess = (formData) => ({
//     type: UserActionTypes.EMAIL_SIGNIN_SUCCESS,
//     payload: formData,
// })

// export const emailRegisterFailure = (error) => ({
//     type: UserActionTypes.EMAIL_SIGNIN_FAILURE,  
//     payload : error
// })