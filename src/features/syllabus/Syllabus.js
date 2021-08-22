import React from 'react'
import { useSelector } from 'react-redux'
import { selectUnits } from './syllabusSlice'

import UnitBlock from './UnitBlock'
import BoilerPlate from './BoilerPlate'
import styles from './Syllabus.module.css'
const Syllabus = ({history}) => {

    const units = useSelector(selectUnits)

    return ( 
        <div className={styles.syllabusWrapper}>
            <div className={styles.unitBlockWrapper}>
                {
                    units.map((unit, idx) => {
                        return <UnitBlock key={`unit-block-${idx}`} unit={unit} idx={idx}/>
                    })
                }
            
            </div>
            <div className={styles.boilerplatewrapper}>
                <BoilerPlate />
            </div>
        </div>
     );
}
 
export default Syllabus;