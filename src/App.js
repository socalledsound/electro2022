import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import Gallery from './features/gallery/Gallery'
import GalleryCategoryPage from './pages/GalleryCategoryPage/GalleryCategoryPage'
import GalleryItemDetailPage from './pages/GalleryItemDetailPage/GalleryItemDetailPage'
import Syllabus from './features/syllabus/Syllabus'
import SyllabusUnit from './features/syllabus/SyllabusUnit'
import SyllabusDay from './features/syllabus/SyllabusDay'
import Assignment from './features/assignments/Assignment'
import ProjectDetail from './features/projects/ProjectDetail'
import UserStatus from './features/user/UserStatus/UserStatus'
import People from './features/people/People'
import './App.css';
import ResourcesPage from './pages/ResourcesPage/ResourcesPage'

const App = () => {


  



  return ( 
      <Fragment>
        <Header />
        <Switch>
          <Route exact path ='/' component={HomePage}/>
          <Route exact path='/gallery' component={Gallery}/>
          <Route exact path ={'/gallery/:categoryName'} component={GalleryCategoryPage} />
          <Route path ={'/gallery/:categoryName/:workId'} component={GalleryItemDetailPage} />
          <Route exact path='/syllabus' component={Syllabus}/>
          <Route exact path='/syllabus/:unitId' component={SyllabusUnit}/>
          <Route exact path='/syllabus/:unitId/:dayId' component={SyllabusDay}/>
          <Route exact path='/assignments/:dayId' component={Assignment}/>
          <Route exact path='/projects/:projId' component={ProjectDetail}/>
          <Route path='/resources' component={ResourcesPage}/>
          <Route path='/people' component={People}/>
          <Route path='/userStatus' component={UserStatus} />
          <Redirect to= '/' />
        </Switch>
      </Fragment>

   );
}
 
export default App;


