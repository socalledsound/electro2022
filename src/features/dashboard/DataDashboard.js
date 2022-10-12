import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPeople, startSyncUsers } from '../people/peopleSlice';
// import { selectCompletedAssignments } from '../user/userSlice'
// import { selectCompletedAssignmentsByUserId } from './dashboardSlice'

import styles from './DataDashboard.module.css'

const DataDashboard = () => {
    const dispatch = useDispatch()
  
  
    useEffect(() => {
      dispatch(startSyncUsers())
  }, [dispatch])

const people = useSelector(selectAllPeople)
// const [thing, setThing] = useState(0)
// setThing(1)
// console.log(thing)

        return(
            <div>
                hi there
                {
                    people.map((person, idx)=> {
                        
                        return (
                            <div key={`data-${idx}`} className={styles.personContainer}>
                                {person.displayName}        
                            </div>
                        )
                            
                        
                    })
                }
            
            </div>
        )
}



export default DataDashboard;