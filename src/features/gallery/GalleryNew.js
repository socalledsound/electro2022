import React, { useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectFeaturedWorks, selectCurrentWorks, selectRecentWorks, startFetchWorks } from './gallerySlice'
import { selectLoginLoading } from '../user/userSlice'
import Loading from '../../components/Loading/Loading'
import GalleryRow from './GalleryRow'
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
    let currentAssignmentTitle  ='whoops'
    if(currentAssignmentWorks && currentAssignmentWorks.length){
        currentAssignmentTitle = currentAssignmentWorks[0].assignment
    }
    const recentWorks = useSelector(selectRecentWorks).filter(item => item.assignment !== currentAssignmentTitle)
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
                        <GalleryRow category={'featured'} works={featuredWorks}/>
                    </div>
                }

                {
                    currentAssignmentWorks.length > 0 && 
                    <div className={styles.galleryRowWrapper}>
                         <h5 className={styles.galleryHeading2}>the current assignment: </h5>
                        <div 
                                        className={styles.galleryCategoryButton}
                                        onClick={() => history.push(`/gallery/${currentAssignmentTitle}`)}
                                    >
                                        <h5 className={styles.galleryHeading}>{currentAssignmentTitle}</h5>
                                    </div>
                        <GalleryRowRecent category={currentAssignmentTitle} works={currentAssignmentWorks}/>
                    </div>
                }

{
                    recentWorks.length > 0 && 
                    <div className={styles.galleryRowRecentWrapper}>
                         <h5 className={styles.galleryHeading2}>other works submitted in the last week: </h5>
                        <GalleryRowRecent category={'submitted recently'} works={recentWorks} recent={true}/>
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