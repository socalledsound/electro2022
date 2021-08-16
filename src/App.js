import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import GalleryPage from './pages/GalleryPage/GalleryPage'
import SyllabusPage from './pages/SyllabusPage/SyllabusPage';
import './App.css';

const App = () => {
  return ( 
      <Fragment>
        <Header />
        <Switch>
          <Route exact path ='/' component={HomePage}/>
          <Route exact path='/gallery' component={GalleryPage}/>
          <Route exact path='/syllabus' component={SyllabusPage}/>
        </Switch>
      </Fragment>

   );
}
 
export default App;


