import React from 'react'
import styles from './Syllabus.module.css'
const UnitDetail = ({ unit }) => {
    return (  
        <div className={styles.unitDetailWrapper}>
           <div>
               <h3>{ unit.title}</h3>
           </div>
            
        </div>
    );
}
 
export default UnitDetail;