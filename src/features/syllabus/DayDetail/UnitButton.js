import React from 'react'
import { withRouter } from 'react-router-dom'
import styles from './DayDetail.module.css'

const UnitButton = ({unit, history}) => {
    return ( 
        <div 
            className={styles.unitButton}
            style={{}} 
            onClick={()=>history.push(`/syllabus/${unit}`)}
        >
            {unit}
        </div>
     );
}
 
export default withRouter(UnitButton);