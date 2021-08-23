import React, { Fragment} from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { selectItemById } from '../../features/gallery/gallerySlice'
import GalleryItemDetail from '../../features/gallery/GalleryItemDetail'
import CritMessagesContainer from '../../features/critMessages/CritMessagesContainer'
import styles from './GalleryItemDetailPage.module.css'
import { selectCurrentUser } from '../../features/user/userSlice'
const GalleryItemDetailPage = ({match}) => {

    const currentUser = useSelector(selectCurrentUser)
    const itemId = match.params.workId 
    console.log(itemId)
    const item = useSelector(selectItemById(itemId))

    return ( 
        <div className={styles.galleryDetailWrapper}>
            {
                item &&
                <Fragment>
                    {
                    currentUser &&
                    <CritMessagesContainer item={item}/>
                    }

                <GalleryItemDetail item={item}/>
                </Fragment>
            }

           
        </div>
     );
}
 
export default withRouter(GalleryItemDetailPage);