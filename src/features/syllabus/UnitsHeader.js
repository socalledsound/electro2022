import React from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectUnits } from './syllabusSlice';
import styles from './Syllabus.module.css'
const UnitsHeader = ({history}) => {

    const units = useSelector(selectUnits)

    return ( 
        <div className={styles.unitHeaderWrapper}>
            {
                units.map( (unit ) => {
                    return (
                        <div 
                            key={unit.id} 
                            className={styles.unitHeaderItem}
                            onClick={() => history.push(`/syllabus/${unit.unit}`)}
                        >
                            {unit.title}
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default withRouter(UnitsHeader);