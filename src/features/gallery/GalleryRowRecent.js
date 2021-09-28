import React from 'react'
import { randomizeArray } from '../../utils/utils'
import styles from './Gallery.module.css'
import GalleryItem from './GalleryItem'

const GalleryRowRecent = ({ category, works }) => {
    const shuffledWorks = randomizeArray(works)
    return ( 
        <div className={styles.galleryRowRecentContainer}> 
           
            {
                shuffledWorks.map(((item, idx) => {
                    return (
                        
                        <GalleryItem 
                            key={`gallery-item-${idx}`} 
                            item={item} 
                            category={category} 
                        />
                    )
                }))
            }
      
        </div>
     );
}
 
export default GalleryRowRecent;