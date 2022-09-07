import React from 'react'
import { withRouter } from 'react-router-dom'
import styles from './People.module.css'
const PersonDetail = ({person, history}) => {
    return ( 
        <div className={styles.personDetailContainer}>
            name: {person.displayName}
            {/* <div className={styles.worksButton}
            onClick={() => history.push(`/gallery/${person.id}`)}
            >
                what i do
            </div> */}
            
        </div>
     );
}
 
export default withRouter(PersonDetail);