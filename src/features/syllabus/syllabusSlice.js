import { createSlice } from '@reduxjs/toolkit'

import { UNIT0, UNIT1, UNIT2, UNIT3, UNIT4, UNIT5 } from './SYLLABUS_DATA/UNITS.js'


const initialState = {
    units : [UNIT0, UNIT1, UNIT2, UNIT3, UNIT4, UNIT5 ],
    currentUnitIdx: 0,
    currentDayIdx: 0,
}

export const syllabusSlice = createSlice({
    name: 'syllabus',
    initialState,
    reducers : {
        setCurrentDayIdx: (state, action) => {
            return {
                ...state,
                currentDayIdx: action.payload
            }
        }
    }
})

export const selectUnits = state => state.syllabus.units
export const selectUnitById = id => state => {
    // console.log(id)
    return state.syllabus.units.filter((item) => item.unit === id)[0]
}

export const selectDayById = (unit, id) => state => {
    // console.log(unit, id)
    const days = state.syllabus.units.filter(item => item.unit === unit)[0].days
    // console.log(days)
    const day = days.filter(item => item.id === parseInt(id,10))[0]
    // console.log(day)
    return day
}

export const selectCurrentDay = state => {
    return state.syllabus.units[state.syllabus.currentUnitIdx].days[state.syllabus.currentDayIdx]
}

export const { setCurrentDayIdx } = syllabusSlice.actions

export default syllabusSlice.reducer