import React from 'react'
import { withRouter } from 'react-router-dom'
import styles from './GalleryItemDetail.module.css'
const GalleryItemDetail = ({ item, history }) => {
    return ( 
        <div
            className={styles.galleryItemDetailWrapper} 
        >
            <div
                onClick={() => history.push(`/gallery/${item.assignment}`)} 
                className={styles.returnToCategoryDiv}> {`<---`} 
                {item.assignment}
            </div>
            <img className={styles.galleryItemDetailImage} src={item.imageURL} alt="artwork" />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <p>live site: <a href={item.linkURL}>{item.linkURL}</a></p>
            <p>code: <a href={item.codeURL}>{item.codeURL}</a></p>
        </div>
     );
}
 
export default withRouter(GalleryItemDetail);