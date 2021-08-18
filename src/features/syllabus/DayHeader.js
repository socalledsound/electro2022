import React from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { selectUnits, setCurrentDayIdx } from './syllabusSlice';
import styles from './Syllabus.module.css'

const DayHeader = ({ history }) => {
    
    const dispatch = useDispatch()
    const units = useSelector(selectUnits)
    // const days = useSelector(selectDays)
    
    const handleClick = (unit, day) => {
        history.push(`/syllabus/${unit.unit}/${day.id}`)
        dispatch(setCurrentDayIdx(day.id));
    }


    return ( 
        <div className={styles.dayHeaderWrapper}>
            {
                units.map( (unit ) => {
                    return (
                        
                        unit.days.map( day => {
                            return (
                                <div 
                                key={day.id} 
                                className={styles.dayHeaderItem}
                                onClick={() => handleClick(unit, day)}
                                // styles={{...styles.dayHeaderItem, border: {}}}
                            >
                                {day.id}
                            </div>
                            )
                        })
                        

                    )
                })
            }
        </div>
     );
}
 
export default withRouter(DayHeader);