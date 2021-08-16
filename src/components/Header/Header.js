import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
const Header = () => {
    return ( 
        <div className={styles.mainNavWrapper}>
            <div className={styles.leftSide}>
                <NavLink className={styles.homeLink} to='/'>electrocrafting 2021</NavLink>
            </div>
            <div className={styles.rightSide}>
                <NavLink className={styles.otherLink} to='/resources'>resources</NavLink>
                <NavLink className={styles.otherLink} to='/gallery'>gallery</NavLink>
                <NavLink className={styles.otherLink} to='/syllabus'>syllabus</NavLink>
                <NavLink className={styles.otherLink} to='/people'>people</NavLink>
               
            </div>
            
           
        </div>
     );
}
 
export default Header;