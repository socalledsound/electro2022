import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../features/user/userSlice'
import { selectCurrentDay } from '../../features/syllabus/syllabusSlice'
import { selectUserWarnings  } from '../../features/warnings/warningsSlice'
import UserWarnings from '../../features/warnings/UserWarnings'
import DayDetail from '../../features/syllabus/DayDetail/DayDetail'
// import UserHomePage from '../../features/user/UserHomePage/UserHomePage'
import SignInPage from '../../features/user/SignInPage/SignInPage'
import styles from './HomePage.module.css'



const HomePage = () => {

    const currentUser = useSelector(selectCurrentUser)
    const warnings = useSelector(selectUserWarnings)
    const currentDay = useSelector(selectCurrentDay)
    console.log(warnings)

    return ( 
        <div className={styles.homePageWrapper}>
            <div className={styles.homePageInnerBorder}>
                <div className={styles.homePageContainer}>
            {
                currentUser ? 
                    <Fragment>
                        {
                            warnings &&
                            <UserWarnings warnings={warnings} />
                        }
                    <DayDetail day={currentDay}/>
                    </Fragment>
                  :
                    <SignInPage />  
            }
                </div>
            </div>
        </div>
     );
}
 
export default HomePage;