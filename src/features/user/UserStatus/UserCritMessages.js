import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import ProgressBar from '../../../components/ProgressBar/ProgressBar'
import styles from '../UserHomePage.module.css'

const UserCritMessages = ({ numCritMessages, assignmentsCompleted }) => {

    const critsPerAssignment = (numCritMessages / assignmentsCompleted)
    const critMessagePercent = critsPerAssignment/2
    
            return (
                <Fragment>
                {
                    numCritMessages > 0 ? 

                    <div className={styles.critMessagesWrapper}>
                    you've left {numCritMessages} comments on other people's work
                   {/* {renderUserCritMessages()} */}
                   <ProgressBar percent={critMessagePercent} color="purple" />  
                   </div> 
                    :
                    <div className={styles.critMessagesWrapper}>
                    <p>head on over to the <Link to='/gallery' className={styles.linkStyles}>gallery</Link>
                    and comment on some of the pieces you see there, it's an important part of this process!</p>
                    </div>
            


                }
        </Fragment>
            )
}

export default UserCritMessages