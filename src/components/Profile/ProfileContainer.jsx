import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserProfile } from '../redux/profilePage-reducer';
import {withAuthRedirect} from './../../hoc/withAuthRedirect';
import Profile from './Profile';
import { compose } from '../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if(!userId) {
            userId = 5368;
        }
        this.props.getUserProfile(userId);
    }

    render () {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);