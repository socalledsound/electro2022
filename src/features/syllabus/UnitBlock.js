import React from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setCurrentDayIdx } from './syllabusSlice'
import styles from './Syllabus.module.css'
const UnitBlock = ({unit, idx, history}) => {
    const dispatch = useDispatch()
    const handleDayClick = (unit, day) => {
        history.push(`/syllabus/${unit.unit}/${day.id}`)
        dispatch(setCurrentDayIdx(day.id));
    }
    return ( 
        <div className={styles.unitBlockItem} >
            <div className={styles.innerunitBlock}>
            <h3 onClick={() => history.push(`/syllabus/${unit.unit}`)}>{unit.title}</h3>
            {
                unit.days.map((day, idx) => {
                // console.log(day.date.slice(0,-6))
                return (
                    <div 
                        className={styles.dayContainer} 
                        key={`day-div${idx}`} 
                        onClick={() => handleDayClick(unit, day)}
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