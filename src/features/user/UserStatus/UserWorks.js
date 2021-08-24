import React from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { selectWorks } from '../../gallery/gallerySlice'
import { selectCompletedAssignments } from '../userSlice'

import styles from './UserWorks.module.css'

const UserWorks = ({history}) => {

    const userWorks = useSelector(selectCompletedAssignments) || []

    return ( 
        <div className={styles.userWorksSectionWrapper}>
            <div className={styles.userWorksInnerWrapper}>
            <p>you've completed the following assignments:</p>

            <div className={styles.userWorksFlexWrapper}>
            {   
                userWorks.length > 0 &&
                userWorks.map((work, idx) => {
                    console.log(work)
                return (
                        <div 
                            key={`${work.id}-${idx}`}
                            className={styles.buttonToUserWork}
                            onClick={() => history.push(`/gallery/${work.assignment}/${work.id}`)}
                        >
                            {work.assignment}
                        </div>
                    )    
                })
                
                
            }
            </div>
            </div>
        </div>
     );
}
 
export default withRouter(UserWorks);