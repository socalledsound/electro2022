import React, { useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectFeaturedWorks, selectCurrentWorks, selectCurrentGalleryAssignment, selectRecentWorks, selectUncommentedWorks, startFetchWorks } from './gallerySlice'
import { selectCurrentUser, selectLoginLoading } from '../user/userSlice'
import Loading from '../../components/Loading/Loading'
// import GalleryRow from './GalleryRow'
import GalleryRowRecent from './GalleryRowRecent'
// import { galleryCategories } from './GALLERY_CATEGORIES'
import styles from './Gallery.module.css'

const GalleryNew = ({history}) => {

    const dispatch = useDispatch()
    const loading = useSelector(selectLoginLoading)

    useEffect(() => {
        // instead fetch featured, recent, current
      dispatch(startFetchWorks())
  }, [dispatch])

    const featuredWorks = useSelector(selectFeaturedWorks)
    const currentAssignmentWorks = useSelector(selectCurrentWorks)
    let currentAssignment  = useSelector(selectCurrentGalleryAssignment)
    // if(currentAssignmentWorks && currentAssignmentWorks.length){
    //     currentAssignmentTitle = currentAssignmentWorks[0].assignment
    // }
    const recentWorks = useSelector(selectRecentWorks).filter(item => item.assignment !== currentAssignment.title)
    console.log(recentWorks)
    const currentUser = useSelector(selectCurrentUser)
    const unCommentedWorks = useSelector(selectUncommentedWorks(currentUser))

    console.log(featuredWorks)
    return ( 
        <div>
        {
            loading ?
            <Loading />
            :
           
        
            <div className={styles.galleryWrapper}>
                {
                    featuredWorks.length > 0 && 
                    <div className={styles.galleryRowWrapper}>
                         <h5 className={styles.galleryHeading2}>you're all making cool stuff but, don't miss these ::  </h5>
                        <GalleryRowRecent category={'featured'} works={featuredWorks}/>
                    </div>
                }

                
                    
                    <div className={styles.galleryRowWrapper}>
                         <h5 className={styles.galleryHeading2}>the current assignment: </h5>
                        <div 
                                        className={styles.galleryCategoryButton}
                                        onClick={() => history.push(`/assignments/${currentAssignment.id}`)}
                                    >
                                        <h5 className={styles.galleryHeading}>{currentAssignment.title}</h5>
                                    </div>
                                    {
                                    currentAssignmentWorks.length > 0 && 
                        <GalleryRowRecent category={currentAssignment.title} works={currentAssignmentWorks}/>
                                    }
                    </div>
                

                {
                    recentWorks.length > 0 && 
                    <div className={styles.galleryRowRecentWrapper}>
                         <h5 className={styles.galleryHeading2}>other works submitted in the last week: </h5>
                        <GalleryRowRecent category={'submitted recently'} works={recentWorks} recent={true}/>
                    </div>
                }
                {
                    unCommentedWorks.length > 0 && currentUser.id === '9yg75keL2KdTSQCRNavncDhBN9I2' &&
                    <div className={styles.galleryRowRecentWrapper}>
                    <h5 className={styles.galleryHeading2}>hin Chris, make comments on these please: </h5>
                   <GalleryRowRecent category={'submitted recently'} works={unCommentedWorks} recent={true}/>
               </div>
                }
    

                <div className={styles.moreWorksWrapper}>
                    <div className={styles.loadMoreButton} onClick={()=> history.push('/fullgallery')}>click to see the full gallery</div>
                </div>

    
            </div>
            
        }
        </div>
     );
}
 
export default withRouter(GalleryNew);