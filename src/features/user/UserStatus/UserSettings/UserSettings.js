import React from 'react'
import { useDispatch } from 'react-redux'
import { logOutUser } from '../../userSlice'
// import { selectPercentUploadedImg } from '../../../submitWork/submitWorkSlice'
import useModal from '../../../../components/Modal/useModal'
import EditUserForm from './EditUserForm'
import styles from './UserSettings.module.css'
const UserSettings = ({user}) => {
    
    const dispatch = useDispatch()
    const { modal, toggleModal, ModalContent } = useModal()
    // const percentUploaded = useSelector(selectPercentUploadedImg)
    // console.log(percentUploaded)
    return ( 
        <div className={styles.userSettingsWrapper}>
            <div className={styles.settingsFlexWrapper}>
            <div className={styles.userDetailsFlexContainer}>
               
                <img src={user.avatar} alt="user" className={styles.userSettingsImage}/>
                <p>{user.displayName}</p>
            </div>
            <div>
                <button 
                        className={styles.userSettingsButton}
                        onClick={() => toggleModal(true)}
                    >
                        edit user settings
                    </button>
            </div>
            <div>
                <button 
                        className={styles.userSettingsButton}
                        onClick={()=>dispatch(logOutUser())}
                    >
                        logout
                    </button>
            </div>
            </div>
            {
                modal &&
                <ModalContent>
                    <EditUserForm  toggleModal={toggleModal} user={user}/>
                </ModalContent>
            }

        </div>
     );
}
 
export default UserSettings;