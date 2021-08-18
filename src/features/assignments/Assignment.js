import React from 'react'
import { useSelector } from 'react-redux'
import { withHistory } from 'react-router-dom'
import {selectAssignment } from './assignmentSlice'

const Assignment = ({match}) => {
    
    const assignment = useSelector(selectAssignment(match.params.dayId))
    
    return ( 
        <div>
            {assignment.title}
        </div>
     );
}
 
export default withHistory(Assignment);