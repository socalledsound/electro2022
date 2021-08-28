import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser } from '../../features/user/userSlice'
import { selectCurrentDay } from '../../features/syllabus/syllabusSlice'

import { startFetchUserWorks } from '../../features/gallery/gallerySlice'
import UserWarnings from '../../features/warnings/UserWarnings'
import DayDetail from '../../features/syllabus/DayDetail/DayDetail'
// import UserHomePage from '../../features/user/UserHomePage/UserHomePage'
import SignInPage from '../../features/user/SignInPage/SignInPage'
import styles from './HomePage.module.css'



const HomePage = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)
    // const warning = useSelector(selectWarningStatus)
    const currentDay = useSelector(selectCurrentDay)
    console.log(currentUser, currentDay)

    useEffect(() => {
        dispatch(startFetchUserWorks(currentUser))
    }, [currentUser, dispatch])

    return ( 
        <div className={styles.homePageWrapper}>
            <div className={styles.homePageInnerBorder}>
                <div className={styles.homePageContainer}>
            {
                currentUser ? 
                    <Fragment>
                        {
                            currentUser &&
                            <UserWarnings currentUser={currentUser}/>
                        }
                    <DayDetail day={currentDay}/>
                    </Fragment>
                  :
                    <SignInPage />
                    // <div>hi</div>  
            }
                </div>
            </div>
        </div>
     );
}
 
export default HomePage;