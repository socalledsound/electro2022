import React from 'react'
import { withRouter } from 'react-router-dom'
import styles from './Gallery.module.css'

const GalleryItem = ({ item, history }) => {
    return ( 
        <div  
            className={styles.galleryItemContainer}
            onClick={ () => history.push(`/gallery/${item.id}`)} >
                <img className={styles.workImage} src={item.imageURL} alt={item.title}/>
                <div 
                    className={styles.workTitle} 
                  
                >
                    {item.title}
                </div>     
        </div>
     );
}
 
export default withRouter(GalleryItem);