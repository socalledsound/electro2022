import React from 'react'
import { withRouter } from 'react-router-dom'
import styles from './Syllabus.module.css'
const UnitBlock = ({unit, idx, history}) => {
    // console.log(unit)
    return ( 
        <div className={styles.unitBlockItem} >
            <div className={styles.innerunitBlock}>
            <h3 onClick={() => history.push(`/syllabus/${unit.unit}`)}>{idx} : {unit.title}</h3>
            {
                unit.days.map((day, idx) => {
                // console.log(day.date.slice(0,-6))
                return (
                    <div 
                        className={styles.dayContainer} 
                        key={`day-div${idx}`} 
                        onClick={() => history.push(`/syllabus/${unit.unit}/${day.id}`)}
                    >
                        <p>{day.date.slice(0,-6)} : {day.title}</p>
                    </div>
                    
                )
                
            
            })
            }
            </div>
        </div>
     );
}
 
export default withRouter(UnitBlock);