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
    ]
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [ ...state.messagesData, {id: 6, message: body}]
            };
        }    
        default:
            return state;
    }
}

export const sendMessageCreater = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;