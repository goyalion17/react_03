import { usersAPI, profileAPI } from '../../api/api';
import {stopSubmit} from 'redux-form';
import { type } from 'os';
import { PhotosType, PostType, ProfileType } from './../../types/types';

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20},
        {id: 3, message: 'Hi, how are you?', likesCount: 15},
        {id: 4, message: 'It\'s my first post', likesCount: 20}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
}

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_STATUS: {
            return {...state, status: action.status};
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)};
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType};
        }
        default:
            return state;
    }
}

type AddPostActionCreaterActionType = {
    type: typeof ADD_POST
    newPostText: string
}

export const addPostActionCreater = (newPostText: string): AddPostActionCreaterActionType => ({ type: ADD_POST, newPostText})

type DeletePostActionCreater = {
    type: typeof DELETE_POST
    postId: number
}

export const deletePost = (postId: number): DeletePostActionCreater => ({ type: DELETE_POST, postId}) 

type SavePhotoSuccessActionCreater = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}

export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionCreater => ({ type: SAVE_PHOTO_SUCCESS, photos })

type SetSatusActionCreater = {
    type: typeof SET_STATUS
    status: string
}

export const setSatus = (status: string): SetSatusActionCreater => ({ type: SET_STATUS, status})

type SetUserProfileActionCreater = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}

export const setUserProfile = (profile: ProfileType): SetUserProfileActionCreater => ({ type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setSatus(response.data));    
}

export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setSatus(status));
    } 
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    } 
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;