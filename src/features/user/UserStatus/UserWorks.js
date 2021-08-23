import React from 'react'
import { useSelector } from 'react-redux'
// import { selectWorks } from '../../gallery/gallerySlice'
import { selectCompletedAssignments } from '../userSlice'
const UserWorks = () => {

    const userWorks = useSelector(selectCompletedAssignments) || []

    return ( 
        <div>
            {   
                userWorks.length > 0 &&
                userWorks.map(work => <div key={work.id}>{work.assignment}{work.title}</div>)
            }
            
        </div>
     );
}
 
export default UserWorks;