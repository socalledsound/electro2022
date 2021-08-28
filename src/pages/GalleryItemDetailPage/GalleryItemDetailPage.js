import React from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { selectItemById } from '../../features/gallery/gallerySlice'
import GalleryItemDetail from '../../features/gallery/GalleryItemDetail'
import CritMessagesContainer from '../../features/critMessages/CritMessagesContainer'
import styles from './GalleryItemDetailPage.module.css'
// import { selectCurrentUser } from '../../features/user/userSlice'
const GalleryItemDetailPage = ({match, history}) => {

    // const currentUser = useSelector(selectCurrentUser)
    const itemId = match.params.workId 
    // console.log(itemId)
    const item = useSelector(selectItemById(itemId))

    return ( 
        <div className={styles.galleryDetailWrapper}>
                    {item &&
                                        <div
                                        onClick={() => history.push(`/gallery/${item.assignment}`)} 
                                        className={styles.returnToCategoryDiv}
                                    > 
                                        {`<---`} {item.assignment}
                                    </div>
                    
                    }

            
            {
                item &&
                <div className={styles.galleryDetailContainer}>

                    <CritMessagesContainer item={item}/>       
                    <GalleryItemDetail item={item}/>
                </div>
            }
            
           
        </div>
     );
}
 
export default withRouter(GalleryItemDetailPage);