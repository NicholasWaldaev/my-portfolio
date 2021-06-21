import React from 'react';
import s from './Main.module.css'
import sContainer from './../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.main}>
            <div className={sContainer.container}>
                <div className={s.text}>
                    <h2>I am Jonathan Doe</h2>
                    <h2>Developer</h2>
                </div>
                <div className={s.photo}></div>
            </div>

        </div>
    )
}