import { createSlice } from '@reduxjs/toolkit'
import { selectPreviousDays } from '../syllabus/syllabusSlice'
import { selectCompletedAssignments } from '../user/userSlice'
import { selectCritMessagesForUserId } from '../critMessages/critMessagesSlice'
import { ASSIGNMENTS } from '../assignments/assignmentSlice'
const initialState = {
    currentWarning: false,
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
export const selectProjectWarnings  = state => false
export const selectAssignmentWarnings = state => {
    // state.warnings.assignmentWarnings
    const previousDays = selectPreviousDays(state)
    const completedAssignments = selectCompletedAssignments(state)
    const assignmentsDue = previousDays.map((day, idx) => ASSIGNMENTS[idx].title)
    console.log(assignmentsDue)
    // const warnings = assignmentsDue.filter(item => item.)
    // const oldWorks = action.payload.filter(work => !action.payload.some(newWork => newWork.id === work.id));
    const warnings = assignmentsDue.filter((ass, idx) => {
        if(!completedAssignments.some(comp => comp.assignment === ass)){
            console.log(idx)
            console.log(previousDays[idx])
            return idx
        } else {
            return null
        }
    })
    console.log(warnings)
    if(warnings.length > 0){
        return warnings
    } else {
        return null
    }
    
}
    export const selectCritMessageWarning = userId => state => {
        const numMade = selectCritMessagesForUserId(userId)(state)
        const completedDays = selectPreviousDays(state)
        const numNeeded = completedDays.length * 2
        const critMessageWarning = {numMade, numNeeded}
        return critMessageWarning
    }
export default warningsSlice.reducer
