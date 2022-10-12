// import {selectAllPeople, selectUserById} from '../people/peopleSlice'
// import { selectCompletedAssignments } from '../user/userSlice'
import { selectWorks } from '../gallery/gallerySlice'


export const selectCompletedAssignmentsByUserId = userId => state => {
    const allWorks = selectWorks(state)
  
    // console.log(allWorks, user)
    if(allWorks){
        const userWorks = allWorks.filter(item => {
            // console.log(item, user.id)
            return item.user.id === userId
        })
        return userWorks
    } else {
        return null
    }
}