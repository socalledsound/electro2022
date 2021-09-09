import React from 'react'
import styles from './ProjectDetail.module.css'
const SubmitProject = ({currentUser, projectOpen, completed, handleClick}) => {
    return ( 
        <div className={styles.submitButtonContainer}>
        {
            !currentUser ? 
                <div className={styles.noSubmitButton}>
                    <p>please log in to see the project</p>
                </div>
                :
                projectOpen ?


                    completed ? 
                            <div className={styles.noSubmitButton}>
                                <p>you already completed this project</p>
                                <button>edit submission</button>
                            
                            </div>
                            :
                            
                                <button 
                                onClick={handleClick}
                                className={styles.submitButton}
                            >
                                submit project
                            </button>
                :
                <div className={styles.noSubmitButton}>
                <p>this project isn't due yet!</p>
            
            
            </div>
            }
        </div>

     );
}
 
export default SubmitProject;