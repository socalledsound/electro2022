import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
// import useModal from '../../components/Modal/useModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit as pencil} from '@fortawesome/free-solid-svg-icons'
import { faTrash as trash} from '@fortawesome/free-solid-svg-icons'
import { createTimeElapsed } from '../../utils/utils'
import { selectUserById } from '../people/peopleSlice'
import { selectCurrentUser } from '../user/userSlice'
import styles from './CritMessages.module.css'


const CritMessage = ({item}) => {

    //  const { modal, toggleModal, ModalContent } = useModal();

    const user = useSelector(selectUserById(item.user))
    const currentUser = useSelector(selectCurrentUser)

    const elapsed = createTimeElapsed(item.timestamp)


    const handleEdit = (id) => {
        console.log('editing', id)
    }

    const handleDelete = (id) => {
        
    }


    return ( 
        <div className={styles.critMessageWrapper}>

        
        <div className={styles.critMessageContainer}>
            <div className={styles.userFlexWrapper}>

           
                {
                    user&&
                    <Fragment>
                        <div className={styles.critMessageImageContainer}>
                            <img src={user.avatar} alt='user avatar' className={styles.avatar}/> 
                        </div>
                        <div className={styles.critMessageTitleSecondaryContainer}>
                           
                            <h5 className={styles.userName}>{user.displayName}</h5>
                            <p className={styles.elapsedTime}>{elapsed}</p>
                        </div>
                        {
                            currentUser.id === user.id &&
                            <div>
                               <FontAwesomeIcon 
                                    icon={pencil}
                                    onClick={()=> handleEdit(user.id)}
                                    className={styles.pencil}
                               />
                                <FontAwesomeIcon 
                                    icon={trash}
                                    onClick={()=> handleDelete(user.id)}
                                    className={styles.trash}
                               />
                            </div>
                        }

                    </Fragment>
                }
            </div>
           
            <div className={styles.critMessageBodyContainer}>
                {item.message}
                
            </div>
        </div>
        </div>
     );
}
 
export default CritMessage;