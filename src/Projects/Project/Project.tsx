import React from 'react';
import s from './Project.module.css'

type ProjectPropsType = {
    title: string
    description: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.imgProject}>
                <a className={s.butProject} href="#">Посмотреть</a>
            </div>
            <div className={s.textProject}>
                <div>{props.title}</div>
                <div>{props.description}</div>
            </div>
        </div>
    )
}