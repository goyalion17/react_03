import { connect } from 'react-redux';
import { sendMessageCreater, updateNewMessageBodyCreater } from '../redux/dialogsPage-reducer';
import {withAuthRedirect} from './../../hoc/withAuthRedirect';
import Dialogs from './Dialogs';
import { compose } from '../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreater())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreater(body));
        }
    }    
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);