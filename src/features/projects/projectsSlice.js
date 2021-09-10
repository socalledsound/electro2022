import { createSlice } from '@reduxjs/toolkit'
import { PROJECT0 } from './PROJECTS_DATA/PROJECT0'
import { PROJECT1 } from './PROJECTS_DATA/PROJECT1'
import { MIDTERM_PROJECT } from './PROJECTS_DATA/MIDTERM_PROJECT'

export const PROJECTS = [
    PROJECT0,
    PROJECT1,
    MIDTERM_PROJECT
]

const initialState = {
    projects: PROJECTS,
    selectedProjectId: null,
    currentProject: null,
    
}

export const projectsSlice = createSlice({    
    name: 'project',
    initialState,
    reducers: {
        setPercentUploadedImg : (state, action) => {
            return {
                ...state,
                percentUploadedImg : action.payload
                }
            }
        }
})

export const selectProject = (id) => state => state.project.projects.filter((project) => project.id === id)[0]
// export const selectProjectOpen = (id) => state => {
//    const project = selectProject(id)(state)
//    console.log(project, project.open)
//     return project.open
// }

export const selectProjectDue = (id) => state => {
    let today = new Date()
    const projectDue = selectProject(id)(state).due
    const dateDue = new Date(`${projectDue}, 2021`)
    const due = (today >= dateDue) ? true : false 
    return due
}

export default projectsSlice.reducer