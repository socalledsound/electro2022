import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentWarnings: ['MISSING_ASSIGNMENT', 'MISSING_CRIT_MESSAGES', 'MISSING_PROJECT']
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

export const selectUserWarnings = state => {
    console.log(state.warnings)
    return state.warnings.currentWarnings

}
export default warningsSlice.reducer
