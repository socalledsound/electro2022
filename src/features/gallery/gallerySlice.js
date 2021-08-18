import { createSlice } from '@reduxjs/toolkit'

const tempWork = {
    assignment: 'fun fun function',
    code: 'https://github.com/socalledsound/something',
    description: 'my desriptiuon here',
    featured: false,
    imageURL: '',
    linkURL: '',
    timestamp: Date.now(),
    title: 'my title',
    user: {
        id: 110292,
        name: 'chris kubick'
    }
}

const initialState = {
    works: [tempWork],
}

export const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers : {

    }
})

export const selectWorks = state => state.gallery.works

export default gallerySlice.reducer