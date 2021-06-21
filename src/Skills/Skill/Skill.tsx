import React from 'react';
import s from './Skill.module.css'

type SkillPropsType = {
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h4>{props.title}</h4>
            <span>{props.description}</span>
        </div>
    )
}