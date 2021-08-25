import React from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { selectWorksByCategory } from '../../features/gallery/gallerySlice'
import GalleryItem from '../../features/gallery/GalleryItem'
import styles from './GalleryCategoryPage.module.css'

const GalleryCategoryPage = ({match, history}) => {

    const category = match.params.categoryName
    console.log(category)
    const works = useSelector(selectWorksByCategory(category))

    return ( 
        <div className={styles.galleryCategoryPageWrapper}>
            <div 
                className={styles.returnToMainGalleryButton}
                onClick={() => history.push('/gallery')}
                > 
                {`<---`}main gallery page
            </div>
            <div className={styles.categoryContainer} >
            {
                works && 
                works.length > 0 &&
                works.map( (work, idx) => {
                    return(
                        <div className={styles.itemSpacer}>
                            <GalleryItem key={`item${work.id}-${idx}`} item={work}/>
                        </div>
                        
                    )
                })
            }
            
            </div>
        </div>
     );
}
 
export default withRouter(GalleryCategoryPage);