import React, { useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectFeaturedWorks, selectCurrentWorks, selectRecentWorks, startFetchWorks } from './gallerySlice'
import { selectLoginLoading } from '../user/userSlice'
import Loading from '../../components/Loading/Loading'
import GalleryRow from './GalleryRow'
import { galleryCategories } from './GALLERY_CATEGORIES'
import styles from './Gallery.module.css'

const GalleryNew = ({history}) => {

    const dispatch = useDispatch()
    const loading = useSelector(selectLoginLoading)

    useEffect(() => {
        // instead fetch featured, recent, current
      dispatch(startFetchWorks())
  }, [dispatch])



    // const galleryCategories = useSelector(selectCategories)
    // const works = useSelector(selectWorks)
    const featuredWorks = useSelector(selectFeaturedWorks)
    const currentAssignmentWorks = useSelector(selectCurrentWorks)
    let currentAssignmentTitle  ='whoops'
    if(currentAssignmentWorks && currentAssignmentWorks.length){
        currentAssignmentTitle = currentAssignmentWorks[0].assignment
    }
    const recentWorks = useSelector(selectRecentWorks)

   console.log(galleryCategories)
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
                        <GalleryRow category={'featured'} works={featuredWorks}/>
                    </div>
                }

                {
                    currentAssignmentWorks.length > 0 && 
                    <div className={styles.galleryRowWrapper}>
                        <div 
                                        className={styles.galleryCategoryButton}
                                        onClick={() => history.push(`/gallery/${currentAssignmentTitle}`)}
                                    >
                                        <h5 className={styles.galleryHeading}>{currentAssignmentTitle}</h5>
                                    </div>
                        <GalleryRow category={currentAssignmentTitle} works={currentAssignmentWorks}/>
                    </div>
                }

{
                    recentWorks.length > 0 && 
                    <div className={styles.galleryRowWrapper}>
                        <GalleryRow category={'featured'} works={featuredWorks}/>
                    </div>
                }
    

                <div className={styles.moreWorksWrapper}>
                    <div className={styles.loadMoreButton} onClick={()=> history.push('/fullgallery')}>...more works</div>
                </div>

                {/* {
                    galleryCategories.map((category) => {
                        // console.log(category)
                        const categoryWorks = works.filter(work => work.assignment === category)
                        
                            // console.log(categoryWorks)
                        if(categoryWorks.length > 0){
                            return (
                                <div 
                                    key={category} 
                                    className={styles.galleryRowWrapper}
                                    // style={{backgroundColor: getRandomColor()}}
                                >
                                    <div 
                                        className={styles.galleryCategoryButton}
                                        onClick={() => history.push(`/gallery/${category}`)}
                                    >
                                        <h5 className={styles.galleryHeading}>{category}</h5>
                                    </div>
                                     
                                    <GalleryRow category={category} works={categoryWorks}/>
                                </div>
                                
                            )
                        }
                        return null
                    })
                        
                } */}
    
            </div>
            
        }
        </div>
     );
}
 
export default withRouter(GalleryNew);