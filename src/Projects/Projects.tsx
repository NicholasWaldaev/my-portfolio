import React from 'react';
import s from './Projects.module.css'
import sContainer from "../common/styles/Container.module.css";
import {Project} from "./Project/Project";

export const Projects = () => {
    return (
        <div className={s.workBlock}>
            <div className={`${sContainer.container} ${s.workContainer}`}>
                <h2>Мои работы</h2>
                <div className={s.projectsItem}>
                    <Project title={'Social network'} description={'asdasdasdasdasd'}/>
                    <Project title={'Todolist'} description={'asdasdasdasdasdasd'}/>
                    <Project title={'Social network'} description={'asdasdasdasdasdasd'}/>
                    <Project title={'Todolist'} description={'asdasdasdasdasdasd'}/>
                </div>
            </div>
        </div>
    )
}