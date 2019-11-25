const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    
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

}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:{
            return {
                ...state,
                newMessageBody: action.body
            };
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messagesData: [ ...state.messagesData, {id: 6, message: body}]
            };
        }    
        default:
            return state;
    }
}


export const sendMessageCreater = () => ({ type: SEND_MESSAGE})
  
export const updateNewMessageBodyCreater = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;