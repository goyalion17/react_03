import { usersAPI } from '../../api/api';
import {updateObjectInArray} from '../../utils/validators/object-helpers';
import { UserType } from './../../types/types';
import { type } from 'os';
import { AppStateType } from './redux-store';
import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {    
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    page: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>, // array of users id
}

type InitialStateType = typeof initialState

export const usersReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case UNFOLLOW:
                return {
                    ...state,
                    users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
                }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, page: action.page }
        }
        case SET_USERS_TOTAL_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id != action.userId)
            }
        }        
        default:
            return state;
    }
}

type ActionTypes = FollowSuccessActionCreater | UnfollowSuccessActionCreater | SetUsersactionCreater | SetCurrentPageActionCreater | SetTotalUsersCountActionCreater | ToggleIsFetchingactionCreater | ToggleFollowingProgressActionCreater

type FollowSuccessActionCreater = {
    type: typeof FOLLOW
    userId: number
}

export const followSuccess = (userId: number): FollowSuccessActionCreater => ({ type: FOLLOW, userId })

type UnfollowSuccessActionCreater = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessActionCreater => ({ type: UNFOLLOW, userId })

type SetUsersactionCreater ={
    type: typeof SET_USERS
    users: Array<UserType>
}

export const setUsers = (users: Array<UserType>): SetUsersactionCreater => ({ type: SET_USERS, users })

type SetCurrentPageActionCreater = {
    type: typeof SET_CURRENT_PAGE
    page: number
}

export const setCurrentPage = (page: number): SetCurrentPageActionCreater => ({ type: SET_CURRENT_PAGE, page })

type SetTotalUsersCountActionCreater = {
    type: typeof SET_USERS_TOTAL_COUNT
    count: number
}

export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountActionCreater => ({ type: SET_USERS_TOTAL_COUNT, count: totalCount })

type ToggleIsFetchingactionCreater = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingactionCreater => ({ type: TOGGLE_IS_FETCHING, isFetching })

type ToggleFollowingProgressActionCreater = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}

export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressActionCreater => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionTypes>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export const requestUsers = (page: number, pageSize: number): ThunkType => {
    return async (dispatch: DispatchType, getState: GetStateType) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const _followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any, actionCreator: (userId: number) => FollowSuccessActionCreater | UnfollowSuccessActionCreater) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    }
}
export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    }
}

export default usersReducer;