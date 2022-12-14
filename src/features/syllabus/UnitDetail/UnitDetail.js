import React from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setCurrentDayIdx } from '../syllabusSlice'
import styles from './UnitDetail.module.css'
const UnitDetail = ({ unit, history }) => {

    const dispatch = useDispatch()
    const { title, illustrationURL, overview, days, project } = unit
    const handleDayClick = (unit, day) => {
        history.push(`/syllabus/${unit.unit}/${day.id}`)
        dispatch(setCurrentDayIdx(day.id));
    }
    const handleProjectClick = (id) => {
        history.push(`/projects/${id}`)
        // dispatch(setCurrentProjIdx(day.id));
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
                        <div className={styles.unitDescriptionContainer}>

                        
                        {
                            illustrationURL && 
                            <div className={styles.illustrationContainer}>
                                 <img src={illustrationURL} alt="" className={styles.illustration}/>
                            </div>
                           
                        }
            
                        <p className={styles.descriptionText}>
                            {overview}       
                        </p>
                        <div className={styles.projectButtonContainer}>
                            {
                                project.title !== 'project 0' &&
                                <button
                                onClick={() => handleProjectClick(project.id)}
                                className={styles.projectButton}
                                >
                                   {project.title} : {project.teaser} (click for more)
                                </button>
                            }
  
                        </div>
                        
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}
 
export default withRouter(UnitDetail);