import React, { useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectCategories, selectWorks, startFetchWorks } from './gallerySlice'
import { selectLoginLoading } from '../user/userSlice'
import Loading from '../../components/Loading/Loading'
import GalleryRow from './GalleryRow'
import { galleryCategories } from './GALLERY_CATEGORIES'
import styles from './Gallery.module.css'

const Gallery = ({history}) => {

    const dispatch = useDispatch()
    const loading = useSelector(selectLoginLoading)

    useEffect(() => {
      dispatch(startFetchWorks())
  }, [dispatch])



    // const galleryCategories = useSelector(selectCategories)
    const works = useSelector(selectWorks)
    const featuredWorks = works.filter(item => item.featured)
   console.log(galleryCategories)
    return ( 
        <div>
        {
            loading ?
            <Loading />
            :
            works ?
        
            <div className={styles.galleryWrapper}>
                {
                    featuredWorks.length > 0 && 
                    <div className={styles.galleryRowWrapper}>
                        <GalleryRow category={'featured'} works={featuredWorks}/>
                    </div>
                }
    
                {
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
                        
                }
    
            </div>
            :
            <div>...loading</div>
        }
        </div>
     );
}
 
export default withRouter(Gallery);