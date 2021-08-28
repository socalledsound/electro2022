import { createSlice } from '@reduxjs/toolkit'
// import { tempUser1, tempUser2, tempUser3, tempUser4 } from '../user/TEMP_USERS'
const initialState = {
    // allPeople: [tempUser1, tempUser2, tempUser3, tempUser4 ]
    allPeople: []
}

const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        startFetchUsers(){},
        fetchUsersSuccess : (state, action) => {
            console.log(action.payload)
            return {
                allPeople: action.payload
            }
        },
        fetchUsersFailure : (state, action) => {
            console.log(action.payload)
            return {
                ...state,
                errors: action.payload
            }
        },
        startSyncUsers(){},
        syncUsersFailure: (state, action) => {
            return {
                ...state,
                errors: action.payload,
            }
        },
        updateUsers: (state, action) => {
            console.log(action.payload)
            return {
                ...state,
            }
        }
    }
})

export const selectAllPeople = (state) => state.people.allPeople
export const selectUserById = id => state => state.people.allPeople.filter(person => person.id === id)[0]

export const { startFetchUsers, fetchUsersSuccess, fetchUsersFailure, updateUsers, syncUsersFailure, startSyncUsers } = peopleSlice.actions
export default peopleSlice.reducer