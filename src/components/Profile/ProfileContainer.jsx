import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { getUserProfile } from '../redux/profilePage-reducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if(!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render () {
        if (!this.props.isAuth) return <Redirect to='/login' />;

        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profil,
    isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter (ProfileContainer);

export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);