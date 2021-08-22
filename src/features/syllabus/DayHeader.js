import React from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { selectUnits, selectCurrentDayIdx, setCurrentDayIdx } from './syllabusSlice';
import styles from './Syllabus.module.css'

const DayHeader = ({ history }) => {
    
    const dispatch = useDispatch()
    const units = useSelector(selectUnits)
    const currentDayIdx = useSelector(selectCurrentDayIdx)
    console.log(currentDayIdx)
    // const days = useSelector(selectDays)
    
    const handleClick = (unit, dayId) => {
        history.push(`/syllabus/${unit.unit}/${dayId}`)
        dispatch(setCurrentDayIdx(dayId));
    }


    return ( 
        <div className={styles.dayHeaderWrapper}>
            {
                units.map( (unit ) => {
                    return (
                        
                        unit.days.map( (day, idx)  => {
                            const thisDate = new Date(day.date)
                            const currentDay = day.id === currentDayIdx
                            console.log(currentDay)
                            return (
                                <div 
                                key={day.id} 
                                className={styles.dayHeaderItem}
                                style={{ border: `${currentDay ?  '5px solid yellow' : ''}`}}
                                onClick={() => handleClick(unit, day.id)}
                                // styles={{...styles.dayHeaderItem, border: {}}}
                            >
                                {thisDate.getMonth() + 1}/{thisDate.getDate()}
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