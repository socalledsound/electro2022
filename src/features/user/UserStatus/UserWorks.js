import React from 'react'
import { useSelector } from 'react-redux'
import { selectCompletedAssignments } from '../userSlice'
const UserWorks = () => {

    const userWorks = useSelector(selectCompletedAssignments) || []

    return ( 
        <div>
            {   
                userWorks.length > 0 &&
                userWorks.map(work => <div>{work.assignment}{work.title}</div>)
            }
            
        </div>
     );
}
 
export default UserWorks;