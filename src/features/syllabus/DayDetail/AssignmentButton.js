import React from 'react'
import { withRouter } from 'react-router-dom'
import styles from './DayDetail.module.css'

const AsignmentButton = ({history, day}) => {
    return ( 
        <div 
            className={styles.assignmentButtonContainer}
            onClick={() => history.push(`/assignments/${day.id}`)}
            >
            <h5>
                Assignment
            </h5>
        </div>
     )
}
 
export default withRouter(AsignmentButton)
