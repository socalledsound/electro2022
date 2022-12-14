import { createSlice } from '@reduxjs/toolkit'

import { UNIT1, UNIT2, UNIT3, UNIT4, UNIT5, UNIT6 } from './SYLLABUS_DATA/UNITS.js'


const initialState = {
    units : [UNIT1, UNIT2, UNIT3, UNIT4, UNIT5, UNIT6],
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

export const selectCurrentDayIdx  = state => state.syllabus.currentDayIdx


export const selectAllDays = (state) => {
    const units = selectUnits(state)
    // console.log(units)
    const allDays = units.reduce((arr, cur) => {
        cur.days.forEach(day => arr.push(day))
        return arr
    },[])
    // console.log(allDays)
    return allDays
}

export const selectRemainingDays = (state) => {
    const allDays = selectAllDays(state)
    // console.log(allDays)
    const today = new Date()
    today.setHours(today.getHours() - 12)
    const remainingDays = allDays.filter(day => {
        const date = new Date(day.date);
        if(date > today){
            return day 
        }
        return null
    })
    // console.log(remainingDays)
    return remainingDays
}


export const selectCurrentDay = (state) => {
    const remaining = selectRemainingDays(state)
    // console.log(remaining)
    const lowestDay = remaining[0]
    return lowestDay

    // const allDays = selectAllDays(state)
    // // console.log(remaining)
    // const finalDay = allDays[allDays.length-1]
    // return finalDay
}

export const selectFinalDay = (state) => {
    const allDays = selectAllDays(state)
    // console.log(remaining)
    const finalDay = allDays[allDays.length-1]
    return finalDay
}





export const selectPreviousDays = (state) => {
    const allDays = selectAllDays(state)
    
    const today = new Date()
    today.setHours(today.getHours() - 12)
    const previousDays = allDays.filter(day => {
        const date = new Date(day.date);
        if(date < today){
            return day 
        }
        return null
    })
   
    return previousDays
}


export const selectPreviousDaysAfterCutoff = (state) => {
    const allDays = selectAllDays(state)
    const cutoff = new Date("2022-09-24");
    const today = new Date()
    today.setHours(today.getHours() - 12)
    const previousDaysAfterCutoff = allDays.filter(day => {
        const date = new Date(day.date);
        const date2 = new Date(day.date)
        //console.log(date > cutoff)
        if(date > cutoff){
            //console.log('hi:  ', date < today)
            if(date2 < today){
                return day 
            }
            //console.log('yes')
           
        }
        return null
    })
   // console.log(previousDaysAfterCutoff.length)
    return previousDaysAfterCutoff
}




export const { setCurrentDayIdx } = syllabusSlice.actions

export default syllabusSlice.reducer