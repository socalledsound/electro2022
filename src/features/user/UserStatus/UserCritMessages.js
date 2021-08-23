import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectUserCritMessages } from '../../critMessages/critMessagesSlice'
import { Link } from 'react-router-dom'
import ProgressBar from '../../../components/ProgressBar/ProgressBar'
// import styles from '../UserHomePage.module.css'
import styles from './UserCritMessages.module.css'

const UserCritMessages = ({ user }) => {

    const critMessages = useSelector(selectUserCritMessages)(user)
    const numCritMessages = critMessages.length
    const assignmentsCompleted = 1
    const critsPerAssignment = (critMessages.length / assignmentsCompleted)
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