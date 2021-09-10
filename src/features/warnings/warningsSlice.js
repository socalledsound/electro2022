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
    console.log(completedAssignments)
    const assignmentsDue = previousDays.map((day, idx) => ASSIGNMENTS[idx].title)
    console.log(assignmentsDue, completedAssignments)
    // const warnings = assignmentsDue.filter(item => item.)
    // const oldWorks = action.payload.filter(work => !action.payload.some(newWork => newWork.id === work.id));
    let needed = []
    if(completedAssignments.length > 0){
        needed = assignmentsDue.filter((ass, idx) => !completedAssignments.some(comp => comp.assignment === ass))
    }else {
       needed = assignmentsDue
    }
    console.log(needed)
    console.log(previousDays)
    const warnings = needed.reduce((acc, cur) => {
        return acc.concat(previousDays.filter((day) => day.assignment === cur))
    }, [])
    console.log(warnings)

    if(warnings.length > 0){
        return warnings
    } else {
        return null
    }
    
}
    export const selectCritMessageWarning = userId => state => {
        
        const numMade = selectCritMessagesForUserId(userId)(state).length
        const completedDays = selectPreviousDays(state)
        const numNeeded = completedDays.length * 2
        if(numMade < numNeeded){
            return {
                numMade,
                numNeeded
            }
        }else{
            return null
        }    
    }
export default warningsSlice.reducer
