import React from 'react';
import {updateNewMessageBodyCreater, sendMessageCreater} from '../redux/dialogsPage-reducer';
import Dialogs from './Dialogs';
import StoreContext from './../../StoreContext';

const DialogsContainer = (props) => {
    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState().dialogsPage;
   
            let onSendMessageClick = () => {
        store.dispatch(sendMessageCreater());
    }
            let onNewMessageChange = (body) => {
        store.dispatch(updateNewMessageBodyCreater(body));
    }
            return <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state} />
            }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;