import React from 'react'
// import styles from './People.module.css'
const PersonAvatar = ({person}) => {
    return ( 
        
            <img src={person.avatar} alt='student in class' />
        
     );
}
 
export default PersonAvatar;