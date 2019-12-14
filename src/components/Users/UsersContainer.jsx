import React from 'react';
import { connect } from 'react-redux';
import { compose } from '../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';
import Preloader from '../common/Preloader/Preloader';
import { follow, setCurrentPage, requestUsers, toggleFollowingProgress, unfollow } from './../redux/users-reducer';
import Users from './Users';
import { getUsers, getIsFetching, getCurrentPage, getTotalUsersCount, getPageSize, getFollowingInProgress } from './../redux/users-selectors';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
        { this.props.isFetching ? <Preloader /> : null }
            <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}  
            followingInProgress={this.props.followingInProgress}         
            />
        </>
    }
}

/* let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}; */

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {
    follow, unfollow, setCurrentPage,
    toggleFollowingProgress, requestUsers })    
)(UsersContainer);