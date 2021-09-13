import React from 'react'
import { withRouter } from 'react-router-dom'
import styles from './Gallery.module.css'

const GalleryItem = ({ item, category, history }) => {
    return ( 
        <div  
            className={styles.galleryItemContainer}
            onClick={ () => history.push(`/gallery/${category}/${item.id}`)} >
                <img className={styles.workImage} src={item.imageURL} alt={item.title}/>
                <p className={styles.galleryItemTitle}>{item.title}</p>   
        </div>
     );
}
 
export default withRouter(GalleryItem);