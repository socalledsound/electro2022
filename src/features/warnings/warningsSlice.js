import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentWarning: false,
    critMessageWarning : {
        numMade: 0,
        numNeeded: 0
    },
    assignmentWarnings : [],
    projectWarnings : [],
}

export const warningsSlice = createSlice({
    name: 'warnings',
    initialState,
    reducers: {
        setCritMessageWarning: (state, action) => {
            return {
                ...state,
                critMessageWarning: {numMade: action.payload.numMade, numNeeded: action.payload.numNeeded }
            }
        }
    }
})

export const selectWarningStatus = state => state.warnings.currentWarning
export const selectProjectWarnings  = state => state.warnings.projectWarnings
export const selectAssignmentWarnings = state => state.warnings.assignmentWarnings
export const selectCritMessageWarning = state => state.warnings.critMessageWarning
export default warningsSlice.reducer
