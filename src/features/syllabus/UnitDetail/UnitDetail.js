import React from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setCurrentDayIdx } from '../syllabusSlice'
import styles from './UnitDetail.module.css'
const UnitDetail = ({ unit, history }) => {

    const dispatch = useDispatch()
    const { title, illustrationURL, overview, days } = unit
    const handleDayClick = (unit, day) => {
        history.push(`/syllabus/${unit.unit}/${day.id}`)
        dispatch(setCurrentDayIdx(day.id));
    }


    return (  
        <div className={styles.unitDetailWrapper}>
           <div className={styles.unitDetailContainer}>
            <div className={styles.unitContainer} >
                <div className={styles.unitDetailTitle}>
                                {/* <UnitButton unit={unit}/> */}
                                <h5 className={styles.title}>{title}</h5>
                                {/* <AssignmentButton day={day}/> */}

                                {
                                    days.map((day, idx) => {
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
                        {/* <h3>{ unit.title}</h3> */}
                </div>
                <div className={styles.unitDescription}>
                    <div className={styles.descriptionBorder}>
                        {
                            illustrationURL && 

                            <img src={illustrationURL} alt="" className={styles.illustration}/>
                        }
            
                        <p className={styles.descriptionText}>
                            {overview}       
                        </p>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}
 
export default withRouter(UnitDetail);