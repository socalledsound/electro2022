import { createSlice } from '@reduxjs/toolkit'
import galleryCategories from './GALLERY_CATEGORIES'
// import { tempWork1, tempWork2, tempWork3, tempWork4,tempWork5, tempWork6,tempWork7, tempWork8, tempWork9, tempWork10 } from './TEMP_WORKS'


const initialState = {
    // works: [tempWork1, tempWork2, tempWork3, tempWork4,tempWork5, tempWork6,tempWork7, tempWork8, tempWork9, tempWork10],
    works: [],
    categories: galleryCategories,
}

export const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers : {
        addSubmissionToWorks : (state, action) => {
            console.log(action)
            return {
                ...state,
                works:  state.works.concat(action.payload)
            }
        },
        startFetchWorks(){},
        fetchWorksSuccess : () => {

        }, 
        fetchWorksFailure : () => {
            
        },
        startFetchUserWorks(){}, 
        fetchUserWorksSuccess: (state, action) => {
            console.log('too much success')
            // const updatedWorks = [...state.works, ...action.payload].filter((item, pos, arr) => {
            //     return arr.map(work => work['id'].indexOf(item['id']) !== pos)
            // })
           
            const oldWorks = action.payload.filter(work => !action.payload.some(newWork => newWork.id === work.id));
            return {
                ...state,
                works: oldWorks.concat(action.payload)
            }
        }, 
        fetchUserWorksFailure : (state, action) => {
            return{
                ...state,
                errors: action.payload
            }
        }
    }
})

export const selectCategories = state => state.gallery.categories
export const selectWorks = state => state.gallery.works
export const selectItemById = id => state => state.gallery.works.filter(item => item.id === parseInt(id, 10))[0]
export const selectWorksByCategory = category => state => state.gallery.works.filter(item => item.assignment === category)


export const {  addSubmissionToWorks,
    startFetchWorks, fetchWorksSuccess, fetchWorksFailure,
    startFetchUserWorks, fetchUserWorksSuccess, fetchUserWorksFailure,  
} = gallerySlice.actions
export default gallerySlice.reducer