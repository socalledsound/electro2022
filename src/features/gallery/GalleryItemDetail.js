import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startUpdateFeatured } from './gallerySlice'
import useNewModal from '../../components/Modal/useNewModal'
import GalleryItemDeleteModal from './GalleryItemDeleteModal/GalleryItemDeleteModal'
// import GalleryItemEditModal from './GalleryItemEditModal/GalleryItemEditModal'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit as pencil} from '@fortawesome/free-solid-svg-icons'
import { faTrash as trash} from '@fortawesome/free-solid-svg-icons'
import { selectCurrentUser } from '../user/userSlice'
import styles from './GalleryItemDetail.module.css'
import EditWork from './EditWork/EditWork'


const GalleryItemDetail = ({ item, history }) => {
   
    const dispatch = useDispatch()
    
    const currentUser = useSelector(selectCurrentUser)
    //console.log('CURRENT USER:  ' + currentUser)
    //console.log(typeof currentUser.id)
    //console.log(currentUser.displayName)
    // console.log(currentUser.id === '9yg75keL2KdTSQCRNavncDhBN9I2')

    const [ deleteModal, toggleDeleteModal, DeleteModalContent ] = useNewModal();
    const [ editModal, toggleEditModal, EditModalContent ] = useNewModal();


    const [ featured, toggleFeatured ] = useState(item.featured)

    const handleToggleFeatured = () => {
        const newFeatured = !featured
            dispatch(startUpdateFeatured({id: item.id, featured: newFeatured}))
            toggleFeatured(newFeatured)
            
    }


    const handleEdit = () => {
        toggleEditModal(true)
    }

    const handleDelete = () => {
        toggleDeleteModal(true)
    }

    return ( 
        <div
            className={styles.galleryItemDetailWrapper} 
        >

{
                deleteModal &&
                    <DeleteModalContent>
                        <GalleryItemDeleteModal item={item} toggleModal={toggleDeleteModal}/>
                    </DeleteModalContent>
                }    
                {
                    editModal && 
                    <EditModalContent>
                        {/* <GalleryItemEditModal item={item} toggleModal={toggleEditModal}/> */}
                        <EditWork item={item} toggleModal={toggleEditModal}/>
                    </EditModalContent>    
                }

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
                        <div>
                        {
                            currentUser.id === '9yg75keL2KdTSQCRNavncDhBN9I2' &&
                            <button 
                                className={featured ? styles.featuredButton : styles.featureButton} 
                                onClick={handleToggleFeatured}
                            >
                               {featured ? 'unfeature' : 'feature'}
                            </button>
                        }
                        </div>


            <h4 className={featured ? styles.featuredTitle : ''}>{item.title}</h4>
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
                        {
                item.videoURL &&
                <p>video: <a href={item.videoURL}>{item.videoURL}</a></p>
            }
            
        </div>
     );
}
 
export default withRouter(GalleryItemDetail);