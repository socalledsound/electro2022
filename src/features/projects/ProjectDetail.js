import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import MarkdownView from 'react-showdown';
import {selectProject, selectProjectOpen, selectProjectDue } from './projectsSlice'
import { selectCompletedProjects, selectCurrentUser } from '../user/userSlice';
import useModal from '../../components/Modal/useModal'
import SubmitProject from './SubmitProject'
import SubmitWork from '../submitWork/SubmitWork'
import styles from './ProjectDetail.module.css'

const ProjectDetail = ({match}) => {
    
    const [ projectMarkdown, setProjectMarkdown ] = useState(null)
    const [ completed, setCompleted ] = useState(false)
    const { modal, toggleModal, ModalContent } = useModal();
    const project = useSelector(selectProject(match.params.projId))
    const completedProjects = useSelector(selectCompletedProjects)
    const currentUser = useSelector(selectCurrentUser)
    const projectOpen = useSelector(selectProjectOpen(match.params.projId))
    const projectDue = useSelector(selectProjectDue(match.params.projId))
    console.log(projectOpen, projectDue)
    useEffect(() => {
        if(currentUser){
            if(completedProjects && completedProjects.length > 0){
                const filtered = completedProjects.filter(item => {
                    //console.log(item.project, project)
                     return item.project === project.title
                 })
                 if(filtered.length > 0){
                    setCompleted(true)
                }
            }
        }


        // console.log(filtered)
  
    }, [currentUser, project, completedProjects, setCompleted])

    // console.log(completed)

    useEffect(() => {
        console.log(project.markdown)
        fetch(project.markdown)
        .then(resp => resp.text())
        .then(text =>{
            console.log(text)
            return setProjectMarkdown(text)
        } )   
    })

    const handleClick = () => {
        // console.log(toggleModal)
        toggleModal(true)
        console.log('clicked')
        window.scrollTo(0,0)
       
    }
    console.log(projectMarkdown)
    
    return ( 
        <div className={styles.projectDetailWrapper}>

            {!modal ?
            <div className={styles.projectDetailContainer}>
                <div className={styles.titleRowContainer}>
                    <p className={styles.projectTitle}>{project.title}</p>
                    
                    <SubmitProject 
                        currentUser={currentUser} 
                        completed={completed}
                        projectDue={projectDue}
                        handleClick={handleClick}
                    />
                </div>
                <div>
                    {projectMarkdown && 
                    <MarkdownView 
                        markdown={projectMarkdown}
                        options={{ tables: true, emoji: true }}
                        className={styles.projectDescription}
                    />
                    }
                </div>
            
  
            
           
                
            </div>
            :
            null
            }

            <ModalContent>
                <SubmitWork project={project.title} />
            </ModalContent>

        </div>
     );
}
 
export default withRouter(ProjectDetail);