import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';

const App = (props) => {

  return (    
      <div className="app-wrapper">
      <Header />
      <Nav />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} /> }/>
          <Route path='/profile' render={ () => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} /> }/>
        </div>
      </div>
  );
}


export default App;
