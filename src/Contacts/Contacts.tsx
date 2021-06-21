import React from 'react';
import s from './Contacts.module.css'
import sContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <h2>Контакты</h2>
                <form className={s.contactsForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                </form>
                <a className={s.contactsBut} href="#">Отправить</a>
            </div>
        </div>
    )
}