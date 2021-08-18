import React, {useEffect, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectDayById } from './syllabusSlice'
import DayHeader from './DayHeader'
import DayDetail from './DayDetail/DayDetail'
// import styles from './Syllabus.module.css'

const SyllabusDay = ({ match }) => {
    

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    const day = useSelector(selectDayById(match.params.unitId, match.params.dayId))
    // console.log(day);

    return ( 
        <Fragment>
            <DayHeader />
            <DayDetail day={day} />
        </Fragment>

     );
}
 
export default withRouter(SyllabusDay);