import React from 'react'
import { useSelector } from 'react-redux'
import {selectCurrentUser } from '../../user/userSlice'
import UnitButton from './UnitButton'
import AssignmentButton from './AssignmentButton'
import LoginButton from './LoginButton'
import DayDetailLinks from './DayDetailLinks'
import styles from './DayDetail.module.css'

const DayDetail = ({day}) => {
    const currentUser = useSelector(selectCurrentUser)
    const { unit, date, title, illustrationURL, description } = day
    console.log(description)
    return ( 


        <div className={styles.dayDetailWrapper}>
            
            <div className={styles.dayContainer} >

                <div className={styles.dayDetailTitle}>
                   
                        <UnitButton unit={unit}/>
                        
                  

                        <h5 className={styles.title}>{date.slice(0,-6)} : {title}</h5>
                        {
                            currentUser ?
                            <AssignmentButton day={day}/>
                            :
                            <LoginButton />
                        }
                        
                </div>
            
                <div className={styles.dayDescription}>
                    <div className={styles.descriptionBorder}>
                        {
                            illustrationURL && 

                            <img src={illustrationURL} alt="" className={styles.illustration}/>
                        }
            
                        <p className={styles.descriptionText}>
                            {description}
                            
                        </p>
                    </div>
                    
                </div>

                {/* <AssignmentBlock 
                    assignment={assignment} 
                    assignmentRoute={assignmentRoute} 
                    assignmentRouteHandler={assignmentRouteHandler} 
                    nextDay={nextDay} 
                    month={month} 
                    day={day}
                /> */}
                
           </div>
           <DayDetailLinks day={day}/>
        </div>     
  
            
  

     );
}
 
export default DayDetail;