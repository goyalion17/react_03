import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Textarea} from './../common/FormsControls/FormsControls';
import {required, maxLengthCreator} from './../../utils/validators/validators';

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newMessageBody' placeholder='Enter your message' validate={[required, maxLength50]} placeholder={'Add message'} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'dialogAddMessageForm'}) (AddMessageForm);