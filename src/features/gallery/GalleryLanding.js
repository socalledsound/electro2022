import React, { useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectWorks, startFetchWorks } from './gallerySlice'
import { selectLoginLoading } from '../user/userSlice'
import Loading from '../../components/Loading/Loading'
import GalleryRow from './GalleryRow'
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
    // I should probably fetch current assignment works here
    const currentAssignment = []
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
                    currentAssignment.length > 0 && 
                    <div className={styles.galleryRowWrapper}>
                        <GalleryRow category={'featured'} works={featuredWorks}/>
                    </div>
                }
    
               
    
            </div>
            :
            <div>...loading</div>
        }
        </div>
     );
}
 
export default withRouter(Gallery);