import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    percentUploadedImg : 0,
    selectedImage : null,
    errors: null,
    
}


export const submitWorkSlice = createSlice({
    name: 'submitWork',
    initialState,
    reducers: {
        setPercentUploadedImg : (state, action) => {
            return {
                ...state,
                percentUploadedImg : action.payload
            }
        },
        setSelectedImage : (state, action) => {
            return {
                ...state,
                selectedImage : action.payload
            }
        },
        submitWorkFailure  : (state, action) => {
            return {
                ...state,
                errors : action.payload
            }
        },

    }
})

export const selectSelectedImage = state => state.submitWork.selectedImage
export const selectPercentUploadedImg = state => state.submitWork.percentUploadedImg

export const { setPercentUploadedImg, setSelectedImage, submitWorkSuccess, submitWorkFailure  } = submitWorkSlice.actions

export default submitWorkSlice.reducer
