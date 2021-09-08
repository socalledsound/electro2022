import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import MarkdownView from 'react-showdown';
import {selectAssignment, selectAssignmentDue } from './assignmentSlice'
import { selectCompletedAssignments, selectCurrentUser } from '../user/userSlice';
import useModal from '../../components/Modal/useModal'
import SubmitWork from '../submitWork/SubmitWork'
import styles from './Assignment.module.css'

const Assignment = ({match}) => {
    
    const [ assignmentMarkdown, setAssignmentMarkdown ] = useState(null)
    const [ completed, setCompleted ] = useState(false)
    const { modal, toggleModal, ModalContent } = useModal();
    const assignment = useSelector(selectAssignment(match.params.dayId))
    const completedAssignments = useSelector(selectCompletedAssignments)
    const currentUser = useSelector(selectCurrentUser)

    const assignmentDue = useSelector(selectAssignmentDue(match.params.dayId))
    console.log(assignmentDue)
    useEffect(() => {
        if(currentUser){
            if(completedAssignments && completedAssignments.length > 0){
                const filtered = completedAssignments.filter(item => {
                    //console.log(item.assignment, assignment)
                     return item.assignment === assignment.title
                 })
                 if(filtered.length > 0){
                    setCompleted(true)
                }
            }
        }


        // console.log(filtered)
  
    }, [currentUser, assignment, completedAssignments, setCompleted])

    // console.log(completed)

    useEffect(() => {
        // console.log(assignment.markdown)
        fetch(assignment.markdown)
        .then(resp => resp.text())
        .then(text => setAssignmentMarkdown(text))   
    })

    const handleClick = () => {
        // console.log(toggleModal)
        toggleModal(true)
        console.log('clicked')
        window.scrollTo(0,0)
       
    }

    
    return ( 
        <div className={styles.assignmentWrapper}>

            {!modal ?
            <div className={styles.assignmentContainer}>
            <h3 className={styles.assignmentTitle}>{assignment.title}</h3>
            
            
            {assignmentMarkdown && 
                <MarkdownView 
                    markdown={assignmentMarkdown}
                    options={{ tables: true, emoji: true }}
                    className={styles.markdown}
                />
            }
            
            {
            !currentUser ? 
                <div className={styles.noSubmitButton}>
                    <p>please log in to submit an assignment</p>
                </div>
                :
                assignmentDue ?


                    completed ? 
                            <div className={styles.noSubmitButton}>
                                <p>you already completed this assignment</p>
                            
                            
                            </div>
                            :
                            
                                <button 
                                onClick={handleClick}
                                className={styles.submitButton}
                            >
                                submit assignment
                            </button>
                :
                <div className={styles.noSubmitButton}>
                <p>this assignment isn't due yet!</p>
            
            
            </div>
            }
                
                </div>
                :
                null
            }

            <ModalContent>
                <SubmitWork assignment={assignment.title} />
            </ModalContent>

        </div>
     );
}
 
export default withRouter(Assignment);