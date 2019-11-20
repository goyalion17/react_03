import profileReducer from './profilePage-reducer';
import dialogsReducer from './dialogsPage-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
    _state: {
        profilePage: {
    
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'It\'s my first post', likesCount: 20},
                {id: 3, message: 'Hi, how are you?', likesCount: 15},
                {id: 4, message: 'It\'s my first post', likesCount: 20}
            ],
            
            newPostText: 'it-codeis'
            
        },
    
        dialogsPage: {
    
            dialogsData: [
                {id: 1, name: 'Ирина'},
                {id: 2, name: 'Ваня'},
                {id: 3, name: 'Люда'},
                {id: 4, name: 'Максим'},
                {id: 5, name: 'Олег'}
            ],
    
    
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Whats up?'},
                {id: 4, message: 'Hey'},
                {id: 5, message: 'yo'}
            ],

            newMessageBody: ''
    
        },

        sidebar: {}
    
    },

    _callSubscriber () {
        console.log('State is changed');
    },



    getState() {
        return this._state;
    },

    subscribe (observer) {
        this._callSubscriber = observer; // паттерн observer (как button.addEventListener) - наблюдатель, слушатель
    },



    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
    
}

window.store = store;

export default store;