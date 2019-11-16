import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: 'It\'s my first post', likesCount: 20},
    {id: 3, message: 'Hi, how are you?', likesCount: 15},
    {id: 4, message: 'It\'s my first post', likesCount: 20}
]

let dialogsData = [
    {id: 1, name: 'Ирина'},
    {id: 2, name: 'Ваня'},
    {id: 3, name: 'Люда'},
    {id: 4, name: 'Максим'},
    {id: 5, name: 'Олег'}
]

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Whats up?'},
    {id: 4, message: 'Hey'},
    {id: 5, message: 'yo'}
]


ReactDOM.render(<App posts={posts} dialogsData={dialogsData} messagesData={messagesData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
