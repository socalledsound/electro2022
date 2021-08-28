import React from 'react'
import { withRouter } from 'react-router-dom'
import styles from './UserWarnings.module.css'
const AssignmentWarning = ({item, history}) => {
    return ( 
        <div 
            className={styles.assignmentWarningContainer}
            onClick={() => history.push(`/assignments/${item.id}`)}
        >
            <p>{item.title}</p>
        </div>
     );
}
 
export default withRouter(AssignmentWarning);