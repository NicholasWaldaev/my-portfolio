import React from 'react';
import s from './Footer.module.css'
import sContainer from './../common/styles/Container.module.css'


export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <h2>Николай Шалдаев</h2>
                <div className={s.socialContainer}>
                    <div className={s.socialBlock}/>
                    <div className={s.socialBlock}/>
                    <div className={s.socialBlock}/>
                    <div className={s.socialBlock}/>
                </div>
                <span className={s.footerText}>Все права защищены</span>
            </div>
        </div>
    )
}