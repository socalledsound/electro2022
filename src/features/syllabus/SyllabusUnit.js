import React from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUnitById } from './syllabusSlice'
import UnitsHeader from './UnitsHeader'
import UnitDetail from './UnitDetail/UnitDetail'
const SyllabusUnit = ({match}) => {

    const unit = useSelector(selectUnitById(match.params.unitId))

    return ( 
        <div>
            <UnitsHeader />
            
            <UnitDetail  unit={unit}/>
        </div>
     );
}
 
export default withRouter(SyllabusUnit)