import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Route, withRouter} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/Login';
import { initializeApp } from './components/redux/app-reducer';
import { connect } from 'react-redux';
import {compose} from 'redux';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount(){
    this.props.initializeApp();
}

  render() {
    if(!this.props.initialized){
      return <Preloader />
    }
    return (    
        <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
          <div className='app-wrapper-content'>
            <Route path='/dialogs' render={ () => <DialogsContainer /> }/>
            <Route path='/profile/:userId?' render={ () => <ProfileContainer /> }/>
            <Route path='/users' render={ () => <UsersContainer /> }/>
            <Route path='/login' render={ () => <LoginPage /> }/>
          </div>
        </div>
    );
}
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose (
  withRouter,
  connect(mapStateToProps, {initializeApp})) (App);