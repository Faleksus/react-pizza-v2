import React from 'react'
import css from './NotFoundBlock.module.css';

export const NotFoundBlock = () => {
  return (

        <h1 className={css.notFoundBlockTitle}>
            <span className={css.notFoundBlockEmoji}>&#128530;</span>
            <br />
            Нічого не знайдено
            <p className={css.notFoundBlockDescr}>
                Схоже, ми не змогли знайти те, що ви шукали
            </p>
        </h1>

  )
}
