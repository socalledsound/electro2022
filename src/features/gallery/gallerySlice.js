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

    }
})

export const selectCategories = state => state.gallery.categories
export const selectWorks = state => state.gallery.works

export default gallerySlice.reducer