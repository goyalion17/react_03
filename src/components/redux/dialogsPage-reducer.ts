import Dialogs from '../Dialogs/Dialogs';
const SEND_MESSAGE = 'SEND_MESSAGE';

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

let initialState = {    
    dialogsData: [
        {id: 1, name: 'Ирина'},
        {id: 2, name: 'Ваня'},
        {id: 3, name: 'Люда'},
        {id: 4, name: 'Максим'},
        {id: 5, name: 'Олег'}
    ] as Array<DialogType>,

    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Whats up?'},
        {id: 4, message: 'Hey'},
        {id: 5, message: 'yo'}
    ] as Array<MessageType>
}

export type InitialStateType = typeof initialState

export const dialogsReducer = (state = initialState, action: any) => {
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

type SendMessageCreaterActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessageCreater = (newMessageBody: string): SendMessageCreaterActionType => ({ type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;