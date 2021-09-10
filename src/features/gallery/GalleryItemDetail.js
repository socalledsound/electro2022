import React from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit as pencil} from '@fortawesome/free-solid-svg-icons'
import { faTrash as trash} from '@fortawesome/free-solid-svg-icons'
import { selectCurrentUser } from '../user/userSlice'
import styles from './GalleryItemDetail.module.css'
const GalleryItemDetail = ({ item, history }) => {

    const currentUser = useSelector(selectCurrentUser)

    const handleEdit = (id) => {
        console.log('editing', id)
    }

    const handleDelete = (id) => {
        console.log('deleting', id)
    }

    return ( 
        <div
            className={styles.galleryItemDetailWrapper} 
        >

            <img className={styles.galleryItemDetailImage} src={item.imageURL} alt="artwork" />
            {
                            currentUser.id === item.user.id &&
                            <div className={styles.editPanel}>
                               <FontAwesomeIcon 
                                    icon={pencil}
                                    onClick={()=> handleEdit(item.user.id)}
                                    className={styles.pencil}
                               />
                                <FontAwesomeIcon 
                                    icon={trash}
                                    onClick={()=> handleDelete(item.user.id)}
                                    className={styles.trash}
                               />
                            </div>
                        }
            <h4>{item.title}</h4>
            <h6>{item.user.displayName}</h6>
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