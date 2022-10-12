
import { createSlice } from '@reduxjs/toolkit'
import { selectFinalDay, selectCurrentDay } from '../syllabus/syllabusSlice'
import { selectAssignment } from '../assignments/assignmentSlice'
import galleryCategories from './GALLERY_CATEGORIES'
//import { selectUserCritMessages } from '../critMessages/critMessagesSlice'
// import { tempWork1, tempWork2, tempWork3, tempWork4,tempWork5, tempWork6,tempWork7, tempWork8, tempWork9, tempWork10 } from './TEMP_WORKS'

//console.log(galleryCategories)
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
           // console.log(action)
            return {
                ...state,
                works:  state.works.concat(action.payload)
            }
        },
        startFetchWorks(){},
        fetchWorksSuccess : (state, action) => {
            const oldWorks = action.payload.filter(work => !action.payload.some(newWork => newWork.id === work.id));
            return {
                ...state,
                works: oldWorks.concat(action.payload)
            }
        }, 
        fetchWorksFailure : (state, action) => {
            return {
                ...state,
                errors: action.payload
            }
        },
        startFetchUserWorks(){}, 
        fetchUserWorksSuccess: (state, action) => {
            // console.log('too much success')
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
        },
        startDeleteGalleryItem(){},
        deleteGalleryItemSuccess :  (state, action) => {
            const newWorks = state.works.filter(item => item.id !== action.payload.id) 
          //  console.log(newWorks)
            return{
                ...state,
                works: newWorks
            }
        },  
        deleteGalleryItemFailure : (state, action) => {
            return{
                ...state,
                errors: action.payload
            }
        },
        startUpdateGalleryItem(){},
        updateGalleryItemSuccess:  (state, action) => {
            const oldWorks = state.works.filter(item => item.id !== action.payload.id)
            const newItem = {id: action.payload.id, ...action.payload.update, ...action.payload.rest}
            return{
                ...state,
                works: oldWorks.concat(newItem)
            }
        }, 
        updateGalleryItemFailure: (state, action) => {
            return{
                ...state,
                errors: action.payload
            }
        },
        startUpdateFeatured(){},
        updateFeaturedSuccess: (state, action) => {
            const oldWorks = state.works.filter(item => item.id !== action.payload.id)
            const itemToUpdate = state.works.filter(item => item.id === action.payload.id)
            itemToUpdate.featured = true
           // console.log(itemToUpdate)
            return {
                ...state,
                works: oldWorks.concat(itemToUpdate)
            }
        },
        updateFeaturedFailure : (state, action) => {
            return {
                ...state,
                errors: action.payload,
            }
        },

    }
})

export const selectCategories = state => state.gallery.categories
export const selectWorks = state => state.gallery.works
export const selectItemById = id => state => state.gallery.works.filter(item => item.id === id)[0]
export const selectWorksByCategory = category => state => state.gallery.works.filter(item => item.assignment === category)


export const selectFeaturedWorks = state => {
    return selectWorks(state).filter(item => item.featured)
}

export const selectMidtermWorks = state => {
    return selectWorks(state).filter(item => item.assignment === 'MIDTERM')
}

export const selectGPIOWorks = state => {
    return selectWorks(state).filter(item => item.assignment === 'pendulum')
}


//want to return the most recent assignment here
export const selectCurrentWorks = state => { 
    const currentDay = selectCurrentDay(state)
   // console.log(currentDay.id)
    const currentMinus1 = currentDay.id - 1
    const assignment = selectAssignment(currentMinus1)(state)
    const currentWorks = selectWorks(state).filter(item => item.assignment === assignment.title)
    //console.log(currentWorks)
    return currentWorks
}

export const selectCurrentGalleryAssignment = state => {
    const currentDay = selectCurrentDay(state)
   // console.log(currentDay.id)
    const currentMinus1 = currentDay.id - 1
    const assignment = selectAssignment(currentMinus1)(state)
   // console.log(assignment)
    return assignment
}

export const selectFinalGalleryAssignment = state => {
    const finalDay = selectFinalDay(state)
    //console.log(currentDay.id)
    const finalMinus1 = finalDay.id - 1
    const assignment = selectAssignment(finalMinus1)(state)
    return assignment
}

// want to return recently posted works here
export const selectRecentWorks = state => {
    const aWeekAgo = new Date().getTime() - 604800000
    //const aWeekAgoDate = new Date(aWeekAgo)
    //console.log(aWeekAgoDate)
    // let works = []
   const recentWorks = selectWorks(state).filter(item => item.timestamp > aWeekAgo)
//    console.log(recentWorks)
//    works.concat(recentWorks)
//    console.log(works, recentWorks)

    // const recentWorksByAssignment = recentWorks.reduce((acc, cur) => {
    //     return 
    // },[])

    // one of these down below will be great for sorting them into categories
    // function groupBy(arr, property) {
    //     return arr.reduce(function(memo, x) {
    //       if (!memo[x[property]]) { memo[x[property]] = []; }
    //       memo[x[property]].push(x);
    //       return memo;
    //     }, {});
    //   }
      
    //   var o = groupBy(arr, 'type'); // => {orange:[...], banana:[...]}
    //   o.orange; // => [{"type":"orange","title":"First"},{"type":"orange","title":"Second"}]
    //   o.banana; // => [{"type":"banana","title":"Third"},{"type":"banana","title":"Fourth"}]
      
   return recentWorks
}


export   const selectUncommentedWorks = currentUser => state => {
    //const recentWorks = selectRecentWorks(state)
   // const myComments = selectUserCritMessages(currentUser)
    // const uncommentWorks = myComments.reduce((acc, cur) => {
    //     if(cur.)
    // }, [])
   // console.log(recentWorks, myComments)
    return []
}


export const selectWorksByUserId = id => state => {
    console.log(id)
    console.log(selectWorks(state))
    const userWorks = selectWorks(state).filter(work => work.user.id === id)
    return userWorks
}



export const {  addSubmissionToWorks,
    startFetchWorks, fetchWorksSuccess, fetchWorksFailure,
    startFetchUserWorks, fetchUserWorksSuccess, fetchUserWorksFailure,
    startDeleteGalleryItem, deleteGalleryItemSuccess,  deleteGalleryItemFailure,
    startUpdateGalleryItem,  updateGalleryItemSuccess, updateGalleryItemFailure,
    startUpdateFeatured, updateFeaturedSuccess, updateFeaturedFailure,
} = gallerySlice.actions
export default gallerySlice.reducer