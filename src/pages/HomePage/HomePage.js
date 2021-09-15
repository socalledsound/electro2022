import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser, selectLoginLoading } from '../../features/user/userSlice'
import { selectCurrentDay } from '../../features/syllabus/syllabusSlice'
import { fetchUserCritMessagesStart } from '../../features/critMessages/critMessagesSlice'
import { startFetchUserWorks } from '../../features/gallery/gallerySlice'
import UserWarnings from '../../features/warnings/UserWarnings'
// import UserNewMessages from '../../features/userNewMessages/UserNewMessages'
import Loading from '../../components/Loading/Loading'
import DayDetail from '../../features/syllabus/DayDetail/DayDetail'
// import UserHomePage from '../../features/user/UserHomePage/UserHomePage'
import SignInPage from '../../features/user/SignInPage/SignInPage'
import styles from './HomePage.module.css'



const HomePage = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)
    const loading = useSelector(selectLoginLoading)
    // const warning = useSelector(selectWarningStatus)
    const currentDay = useSelector(selectCurrentDay)
    // console.log(currentUser, currentDay)



    useEffect(() => {
        dispatch(startFetchUserWorks(currentUser))
        dispatch(fetchUserCritMessagesStart(currentUser))
    }, [currentUser, dispatch])

    return ( 

        <div className={styles.homePageWrapper}>
            <div className={styles.homePageInnerBorder}>
                <div className={styles.homePageContainer}>
            {


                currentUser ? 
                    loading ? 
                    <Loading />
                    :
                    <Fragment>
                        {
                            currentUser &&
                            <UserWarnings currentUser={currentUser}/>                                
                        }
                        {/* {
                            currentUser &&
                            <UserNewMessages currentUser={currentUser}/>
                        } */}
                    <DayDetail day={currentDay}/>
                    </Fragment>
                  :
                    <SignInPage currentUser={currentUser}/>
                    // <div>hi</div>  
            }
                </div>
            </div>
        </div>
     );
}
 
export default HomePage;
