import React from 'react'
import { useSelector } from 'react-redux'
import { selectUnits } from './syllabusSlice'
import UnitBlock from './UnitBlock'
import styles from './Syllabus.module.css'
const Syllabus = ({history}) => {

    const units = useSelector(selectUnits)

    return ( 
        <div className={styles.unitBlockWrapper}>
            {
                units.map((unit, idx) => {
                    return <UnitBlock key={`unit-block-${idx}`} unit={unit} idx={idx}/>
                })
            }
        </div>
     );
}
 
export default Syllabus;