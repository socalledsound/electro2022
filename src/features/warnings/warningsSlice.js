import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentWarning: true,
}

export const warningsSlice = createSlice({
    name: 'warnings',
    initialState,
    reducers: {
        setCurrentWarnings: (state, action) => {
            return {
                ...state,
            }
        }
    }
})

export const selectWarningStatus = state => state.warnings.currentWarning

export default warningsSlice.reducer
