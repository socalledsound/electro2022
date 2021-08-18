import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectCurrentUser } from '../../features/user/userSlice'
import styles from './Header.module.css'
const Header = () => {

    const currentUser = useSelector(selectCurrentUser)


    return ( 
        <div className={styles.mainNavWrapper}>
            <div className={styles.leftSide}>
                <NavLink className={styles.homeLink} to='/'>electrocrafting 2021</NavLink>
            </div>
            <div className={styles.rightSide}>
                {/* {onClick={() => toggleModal} */
                    currentUser &&
                        <NavLink className={styles.avatar} to='/userStatus'>
                            <img src={currentUser.avatar} alt="user avatar" />
                        </NavLink>
                }
                <NavLink className={styles.otherLink} to='/syllabus'>syllabus</NavLink>
                <NavLink className={styles.otherLink} to='/gallery'>gallery</NavLink>
                <NavLink className={styles.otherLink} to='/people'>people</NavLink>
                <NavLink className={styles.otherLink} to='/resources'>resources</NavLink>
            </div>
            
           
        </div>
     );
}
 
export default Header;