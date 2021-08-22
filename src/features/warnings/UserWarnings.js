import React from 'react'
import { useSelector } from 'react-redux'
import { selectProjectWarnings, selectAssignmentWarnings, selectCritMessageWarning } from './warningsSlice'
import styles from './UserWarnings.module.css'
const UserWarnings = () => {
  
    const projectWarnings = useSelector(selectProjectWarnings)
    const assignmentWarnings = useSelector(selectAssignmentWarnings)
    const critMessageWarning = useSelector(selectCritMessageWarning)

    return ( 
        <div className={styles.userWarningsWrapper}>
            {
                projectWarnings && 
                <div>

                </div>
            }
            {
                assignmentWarnings && 
                <div>
                    
                </div>
            }
            {
                critMessageWarning && 
                <div>
                    
                </div>
            }
        </div>
     );
}
 
export default UserWarnings;