import React from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Preloader from './components/common/Preloader/Preloader';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import { initializeApp } from './components/redux/app-reducer';
import store from './components/redux/redux-store';
import UsersContainer from './components/Users/UsersContainer';

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

let AppContainer = compose (
  withRouter,
  connect(mapStateToProps, {initializeApp})) (App);

const SamuraiJSApp = (props) => { 
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;