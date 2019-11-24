import React from 'react';
import {updateNewMessageBodyCreater, sendMessageCreater} from '../redux/dialogsPage-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageCreater())
        },
        sendMessage: (body) => {
            dispatch(updateNewMessageBodyCreater(body));
        }
    }    
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;