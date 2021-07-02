
import React from 'react';
import q from './Messages.module.css'





const Messages = () => {

    return (
        <div className={q.messages}>


            <div className={q.title}>
                Messages
            </div>

            <div className={q.partners}>
                <div className={q.dialog_partner}>Vasya<hr /></div>
                <div className={q.dialog_partner}>Vasya<hr /></div>
                <div className={q.dialog_partner}>Vasya<hr /></div>
                <div className={q.dialog_partner}>Vasya<hr /></div>
            </div>

            <div className={q.message_history}>
                <div className={q.item}>KY<hr /></div>
                <div className={q.item}>KY<hr /></div>
                <div className={q.item}>KY<hr /></div>
                <div className={q.item}>KY<hr /></div>
            </div>

        </div>
    );
}

export default Messages;