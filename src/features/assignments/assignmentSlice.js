import { createSlice } from '@reduxjs/toolkit'
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
    ASSIGNMENT27,
    ASSIGNMENT28,
    ASSIGNMENT29,
    ASSIGNMENT30,    
} from './ASSIGNMENTS'

const ASSIGNMENTS = [
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
    ASSIGNMENT27,
    ASSIGNMENT28,
    ASSIGNMENT29,
    ASSIGNMENT30,  
]

const initialState = {
    assignments: ASSIGNMENTS,
    selectedAssignmentId: null,
}


export const assignmentSlice = createSlice({
    name: 'assignment',
    initialState,
    reducers: {

    }
})

export const selectAssignment = (id) => state => state.assignment.assignments[id-1]

export default assignmentSlice.reducer
