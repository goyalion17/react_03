const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'ADD-UPDATE-NEW-POST-TEXT';

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
            ]
    
        }
    
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
        
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
        
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
    
            this._callSubscriber(this._state);
        }

    }
    
}

export const addPostActionCreater = () => ({type: ADD_POST})
  
export const updateNewPostTextActionCreater = (text) => ({ type: 'UPDATE-NEW-POST-TEXT', newText: text})

window.store = store;

export default store;