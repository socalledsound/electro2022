import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import useNewModal from '../../components/Modal/useNewModal'
import DeleteCommentModal from './DeleteCommentModal/DeleteCommentModal'
import EditCommentModal from './EditCommentModal/EditCommentModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit as pencil} from '@fortawesome/free-solid-svg-icons'
import { faTrash as trash} from '@fortawesome/free-solid-svg-icons'
import { createTimeElapsed } from '../../utils/utils'
import { selectUserById } from '../people/peopleSlice'
import { selectCurrentUser } from '../user/userSlice'
import styles from './CritMessages.module.css'



const CritMessage = ({item}) => {

    const [ deleteModal, toggleDeleteModal, DeleteModalContent ] = useNewModal();
    const [ editModal, toggleEditModal, EditModalContent ] = useNewModal();

    const user = useSelector(selectUserById(item.user))
    const currentUser = useSelector(selectCurrentUser)
    console.log(user, currentUser)
    const elapsed = createTimeElapsed(item.timestamp)

    const handleEdit = () => {
        toggleEditModal(true)
    }

    const handleDelete = () => {
        toggleDeleteModal(true)
    }


    return ( 
        <div className={styles.critMessageWrapper}>     
        <div className={styles.critMessageContainer}>
            <div className={styles.userFlexWrapper}>

                {
                    deleteModal &&
                    <DeleteModalContent>
                        <DeleteCommentModal item={item} toggleModal={toggleDeleteModal}/>
                    </DeleteModalContent>
                }    
                {
                    editModal && 
                    <EditModalContent>
                        <EditCommentModal item={item} toggleModal={toggleEditModal}/>
                    </EditModalContent>    
                }
                        
                    
                    
                    <Fragment>
                    {
                    user&&
                    <Fragment>
                        <div className={styles.critMessageImageContainer}>
                            <img src={user.avatar} alt='user avatar' className={styles.avatar}/> 
                        </div>

                        {
                            currentUser.id === user.id &&
                            <div>
                               <FontAwesomeIcon 
                                    icon={pencil}
                                    onClick={handleEdit}
                                    className={styles.pencil}
                               />
                                <FontAwesomeIcon 
                                    icon={trash}
                                    onClick={handleDelete}
                                    className={styles.trash}
                               />
                            </div>
                        }

                    </Fragment>
                }
                    </Fragment>
                
           
                
            </div>
           
            <div className={styles.critMessageBodyContainer}>
                    <div className={styles.critMessageTitleSecondaryContainer}>  
                            {
                                user &&
                                <h5 className={styles.userName}>{user.displayName}</h5>
                            }   
                           
                           <p className={styles.elapsedTime}>{elapsed}</p>
                    </div>
                    {
                       typeof item.message !== 'object' && item.message !== null&& 
                       item.message
                    }
                
                
            </div>
        </div>
        </div>
     );
}
 
export default CritMessage;