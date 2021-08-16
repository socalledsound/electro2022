import React from 'react'
import { useSelector } from 'react-redux'
import {selectCurrentAssignment } from '../../syllabus/syllabusSlice'

const UserCurrentAssignment = () => {

    const currentAssignment = useSelector(selectCurrentAssignment)

    return ( 

     );
}
 
export default userCurrentAssignment;