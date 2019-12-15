import profileReducer, {addPostActionCreater, deletePost} from './profilePage-reducer';
import ReactDom from 'react-dom';
import App from './../../App';
import React from 'react';

let state = {    
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20},
        {id: 3, message: 'Hi, how are you?', likesCount: 15},
        {id: 4, message: 'It\'s my first post', likesCount: 20}
    ]
}

it('new post should be added', () => {
    // 1. test data
    let action = addPostActionCreater('it-codeis.com');
    
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(5);
});

it('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});