import React from 'react'
import styles from './UnitDetail.module.css'
const UnitDetail = ({ unit }) => {

    const { title, illustrationURL, overview, days } = unit

    return (  
        <div className={styles.unitDetailWrapper}>
           <div className={styles.unitDetailContainer}>
            <div className={styles.unitContainer} >
                <div className={styles.unitDetailTitle}>
                                {/* <UnitButton unit={unit}/> */}
                                <h5 className={styles.title}>{title}</h5>
                                {/* <AssignmentButton day={day}/> */}
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
 
export default UnitDetail;