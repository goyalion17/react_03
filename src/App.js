import React from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Preloader from './components/common/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import Nav from './components/Nav/Nav';
import { initializeApp } from './components/redux/app-reducer';
import store from './components/redux/redux-store';
import UsersContainer from './components/Users/UsersContainer';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
  catchAllUnhandledErrors = (reason, promise) => {
    alert('Some error occured');
  }

  componentDidMount(){
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    ;
}

componentWillUnmount() {
  window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    ;
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
            <Switch>
              <Route exact path='/' 
                render={ () => <Redirect to={'./profile'} />}/>
              <Route path='/dialogs' 
                render={withSuspense(DialogsContainer)}/>
              <Route path='/profile' 
                render={withSuspense(ProfileContainer)}/>
              <Route path='/users' render={ () => <UsersContainer pageTitle={'Самураи'} /> }/>
              <Route path='/login' render={ () => <LoginPage /> }/>
              <Route path='*' render={ () => <div>404 NOT FOUND</div> }/>
            </Switch>
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