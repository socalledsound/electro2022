import React from 'react'
import { withRouter } from 'react-router-dom'
import styles from './LoginButton.module.css'

const LoginButton = ({history, day}) => {
    return ( 
        <div 
            className={styles.loginButton}
            onClick={() => history.push(`/`)}
            style={{height: '4rem'}}
            >
            <h5>
                log in to see the assignment
            </h5>
        </div>
     )
}
 
export default withRouter(LoginButton)
