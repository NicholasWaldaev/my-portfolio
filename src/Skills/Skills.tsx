import React from 'react';
import s from './Skills.module.css'
import sContainer from './../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2>Мои скиллы</h2>
                <div className={s.containerItem}>
                    <Skill title={'HTML'} description={'Duis molestie enim mattis gravida viverra. Fusce ut eros augue. Sed id mauris vel neque'}/>
                    <Skill title={'CSS'} description={'Duis molestie enim mattis gravida viverra. Fusce ut eros augue. Sed id mauris vel neque'}/>
                    <Skill title={'REACT'} description={'Duis molestie enim mattis gravida viverra. Fusce ut eros augue. Sed id mauris vel neque'}/>
                </div>

            </div>
        </div>
    )
}