import React from 'react'
import { useSelector } from 'react-redux'
import { selectProjectWarnings, selectAssignmentWarnings, selectCritMessageWarning } from './warningsSlice'
import AssignmentWarning from './AssignmentWarning'
import styles from './UserWarnings.module.css'
const UserWarnings = ({currentUser}) => {
  
    const projectWarnings = useSelector(selectProjectWarnings)
    const assignmentWarnings = useSelector(selectAssignmentWarnings)
    console.log(assignmentWarnings)
    const critMessageWarning = useSelector(selectCritMessageWarning(currentUser.id))

    return ( 
        <div className={styles.userWarningsWrapper}>
            {
                projectWarnings && 
                <div>

                </div>
            }
            {
                assignmentWarnings && 
                <div className={styles.assignmentWarningsWrapper}>
                    ATTENTION!: the following assignments require your immediate attention: 
                    
                        <div className={styles.assignmentWarningsFlexWrapper}>
                    {
                    assignmentWarnings.map(item => {
                        console.log(item)
                       return  <AssignmentWarning key={`assignmentwarning-${item.id}`} item={item} />
                    }
                           
                        )
                    }
                        </div>
                    
                </div>
            }
            {
                critMessageWarning && 
                <div className={styles.critMessageWarningsWrapper}>
                    ATTENTION!: please spend a little time responding to other peoples work in the gallery
                    <div className={styles.critMessageWarningsContainer}>
                        {critMessageWarning.numMade} of {critMessageWarning.numNeeded}
                    </div>
                    
                </div>
            }
        </div>
     );
}
 
export default UserWarnings;