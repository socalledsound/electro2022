import { createSlice } from '@reduxjs/toolkit'
import { tempUser1, tempUser2, tempUser3, tempUser4 } from '../user/TEMP_USERS'
const initialState = {
    allPeople: [tempUser1, tempUser2, tempUser3, tempUser4 ]
}

const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {

    }
})

export const selectAllPeople = (state) => state.people.allPeople

export default peopleSlice.reducer