import { createSlice } from '@reduxjs/toolkit'
import galleryCategories from './GALLERY_CATEGORIES'
import { tempWork1, tempWork2, tempWork3, tempWork4,tempWork5, tempWork6,tempWork7, tempWork8, tempWork9, tempWork10 } from './TEMP_WORKS'


const initialState = {
    works: [tempWork1, tempWork2, tempWork3, tempWork4,tempWork5, tempWork6,tempWork7, tempWork8, tempWork9, tempWork10],
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
        }
    }
})

export const selectCategories = state => state.gallery.categories
export const selectWorks = state => state.gallery.works
export const selectItemById = id => state => state.gallery.works.filter(item => item.id === parseInt(id, 10))[0]
export const selectWorksByCategory = category => state => state.gallery.works.filter(item => item.assignment === category)


export const {  addSubmissionToWorks } = gallerySlice.actions
export default gallerySlice.reducer