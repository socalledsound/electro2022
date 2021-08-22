import React from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { selectUnits, selectCurrentDayIdx, setCurrentDayIdx } from './syllabusSlice';
import styles from './Syllabus.module.css'

const DayHeader = ({ history }) => {
    // const [hover, toggleHover ] = useState(false)
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
                                style={{ 
                                    border: `${currentDay ?  '2px solid yellow' : ''}`, 
                                    backgroundColor: `${ currentDay ?  'rgba(116, 243, 143, 0.8)' : 'rgba(246, 243, 243, 0.2)'}`,
                                    color: `${currentDay ?  'black' : 'white'}`    
                                }}
                                onClick={() => handleClick(unit, day.id)}
                                // onMouseEnter={() => toggleHover(!hover)}
                                // onMouseLeave={() => toggleHover(!hover)}
                                // onHover={() => toggleHover(!hover)}
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