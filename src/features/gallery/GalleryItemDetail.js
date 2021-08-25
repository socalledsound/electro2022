import React from 'react'
import { withRouter } from 'react-router-dom'
import styles from './GalleryItemDetail.module.css'
const GalleryItemDetail = ({ item, history }) => {
    return ( 
        <div
            className={styles.galleryItemDetailWrapper} 
        >

            <img className={styles.galleryItemDetailImage} src={item.imageURL} alt="artwork" />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            {
                item.linkURL &&
                <p>live site: <a href={item.linkURL}>{item.linkURL}</a></p>
            }
            {
                item.codeURL &&
                <p>code: <a href={item.codeURL}>{item.codeURL}</a></p>
            }
            
        </div>
     );
}
 
export default withRouter(GalleryItemDetail);