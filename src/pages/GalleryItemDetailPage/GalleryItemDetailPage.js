import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../features/user/userSlice'
import { withRouter, useParams } from 'react-router-dom'
import { selectItemById } from '../../features/gallery/gallerySlice'
import GalleryItemDetail from '../../features/gallery/GalleryItemDetail'
import CritMessagesContainer from '../../features/critMessages/CritMessagesContainer'
import NoCurrentUser from '../../components/NoCurrentUser/NoCurrentUser'
import styles from './GalleryItemDetailPage.module.css'

const GalleryItemDetailPage = ({match, history}) => {

    const currentUser = useSelector(selectCurrentUser)
    const { workId }  = useParams()
    console.log(workId)
    const item = useSelector(selectItemById(workId))
    console.log(item)
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
                currentUser !== null ? 
                    item &&
                    <div className={styles.galleryDetailContainer}>
                        <CritMessagesContainer item={item}/>       
                        <GalleryItemDetail item={item}/>
                    </div>
                :
                    <NoCurrentUser />
            }
            
           
        </div>
     );
}
 
export default withRouter(GalleryItemDetailPage);