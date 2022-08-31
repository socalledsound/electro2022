import { createSlice } from '@reduxjs/toolkit'
import { selectAllDays, selectCurrentDay } from '../syllabus/syllabusSlice'
import {
    ASSIGNMENT1,
    ASSIGNMENT2,
    ASSIGNMENT3,
    ASSIGNMENT4,
    ASSIGNMENT5,
    ASSIGNMENT6,
    ASSIGNMENT7,
    ASSIGNMENT8,
    ASSIGNMENT9,
    ASSIGNMENT10,
    ASSIGNMENT11,
    ASSIGNMENT12,
    ASSIGNMENT13,
    ASSIGNMENT14,
    ASSIGNMENT15,
    ASSIGNMENT16,
    ASSIGNMENT17,
    ASSIGNMENT18,
    ASSIGNMENT19,
    ASSIGNMENT20,
    ASSIGNMENT21,
    ASSIGNMENT22,
    ASSIGNMENT23,
    ASSIGNMENT24,
    ASSIGNMENT25,
    ASSIGNMENT26,
    // ASSIGNMENT27,
    // ASSIGNMENT28,
    // ASSIGNMENT29,
    // ASSIGNMENT30,    
} from './ASSIGNMENTS'

export const ASSIGNMENTS = [
    ASSIGNMENT1,
    ASSIGNMENT2,
    ASSIGNMENT3,
    ASSIGNMENT4,
    ASSIGNMENT5,
    ASSIGNMENT6,
    ASSIGNMENT7,
    ASSIGNMENT8,
    ASSIGNMENT9,
    ASSIGNMENT10,
    ASSIGNMENT11,
    ASSIGNMENT12,
    ASSIGNMENT13,
    ASSIGNMENT14,
    ASSIGNMENT15,
    ASSIGNMENT16,
    ASSIGNMENT17,
    ASSIGNMENT18,
    ASSIGNMENT19,
    ASSIGNMENT20,
    ASSIGNMENT21,
    ASSIGNMENT22,
    ASSIGNMENT23,
    ASSIGNMENT24,
    ASSIGNMENT25,
    ASSIGNMENT26,
    // ASSIGNMENT27,
    // ASSIGNMENT28,
    // ASSIGNMENT29,
    // ASSIGNMENT30,  
]

const initialState = {
    assignments: ASSIGNMENTS,
    selectedAssignmentId: null,
    currentAssignment: null,
    
}


export const assignmentSlice = createSlice({
    name: 'assignment',
    initialState,
    reducers: {
        setPercentUploadedImg : (state, action) => {
            return {
                ...state,
                percentUploadedImg : action.payload
            }
        }
    }
})

export const selectAssignment = (id) => state => state.assignment.assignments[id-1]

export const selectAssignmentDue = (dayId) => state => {
    const allDays = selectAllDays(state)
    //console.log(allDays, dayId)
    const thisDayDue = new Date(allDays[dayId-1].date)
    const currentDay = selectCurrentDay(state)
    const currentDue = new Date(currentDay.date)
    let today = new Date()
    // if due > today, then highest is today
    const highest = (today <= currentDue) ? currentDue : today
    //console.log(highest, thisDayDue)
    const due = (highest >= thisDayDue) ? true : false 
    //console.log(due)
    return due
}
    export const selectPercentUploadedImg = state => state.assignment.percentUploadedImg
export const { setPercentUploadedImg } = assignmentSlice.actions

export default assignmentSlice.reducer
