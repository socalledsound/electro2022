import React from 'react'
import styles from './GalleryItemDetail.module.css'
const GalleryItemDetail = ({ item}) => {
    return ( 
        <div
            className={styles.galleryItemDetailWrapper} 
        >
            <img className={styles.galleryItemDetailImage} src={item.imageURL} alt="artwork" />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <p>live site: <a href={item.linkURL}>{item.linkURL}</a></p>
            <p>code: <a href={item.codeURL}>{item.codeURL}</a></p>
        </div>
     );
}
 
export default GalleryItemDetail;