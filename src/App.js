import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux'
// import { selectCurrentUser, setCurrentUser } from './features/user/userSlice'
import { setCurrentUser } from './features/user/userSlice'
import { onAuthStateChange } from './firebase/firebase.utils'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import GalleryPage from './pages/GalleryPage/GalleryPage'
import Gallery from './features/gallery/Gallery'
import GalleryCategoryPage from './pages/GalleryCategoryPage/GalleryCategoryPage'
import GalleryItemDetailPage from './pages/GalleryItemDetailPage/GalleryItemDetailPage'
// import ClassDataPage from './pages/ClassDataPage/ClassDataPage'
import Syllabus from './features/syllabus/Syllabus'
import SyllabusUnit from './features/syllabus/SyllabusUnit'
import SyllabusDay from './features/syllabus/SyllabusDay'
import Assignment from './features/assignments/Assignment'
import ProjectDetail from './features/projects/ProjectDetail'
import UserStatus from './features/user/UserStatus/UserStatus'
import People from './features/people/People'
import PersonPage from './features/people/PersonPage'
import DataDashboard from './features/dashboard/DataDashboard'
import ResourcesPage from './pages/ResourcesPage/ResourcesPage'
// import { updateUsers } from './features/people/peopleSlice';
import { startSyncUsers } from './features/people/peopleSlice';
import './App.css';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChange(dispatch, setCurrentUser)
      return () => {
        unsubscribeFromAuth()
        
      }  
  }, [dispatch])
  

  useEffect(() => {
    dispatch(startSyncUsers())
}, [dispatch])



  return ( 
      <Fragment>
        <Header />
        <Switch>
          <Route exact path ='/' component={HomePage}/>
          <Route exact path='/gallery' component={GalleryPage}/>
          <Route exact path='/fullgallery' component={Gallery}/>
          <Route exact path ={'/gallery/:categoryName'} component={GalleryCategoryPage} />
          <Route path ={'/gallery/:categoryName/:workId'} component={GalleryItemDetailPage} />
          <Route exact path='/syllabus' component={Syllabus}/>
          <Route exact path='/syllabus/:unitId' component={SyllabusUnit}/>
          <Route exact path='/syllabus/:unitId/:dayId' component={SyllabusDay}/>
          <Route exact path='/assignments/:dayId' component={Assignment}/>
          <Route exact path='/projects/:projId' component={ProjectDetail}/>
          {/* <Route path ='/data' component={ClassDataPage} /> */}
          <Route path='/resources' component={ResourcesPage}/>
          <Route exact path='/people' component={People}/>
          <Route path='/people/:userId' component={PersonPage}/>
          <Route path='/userStatus' component={UserStatus} />
          <Route path='/data' component={DataDashboard} />
          <Redirect to= '/' />
        </Switch>
      </Fragment>

   );
}
 
export default App;


