import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Question.module.css';

const Question = ({ text, id, increaseIndex }) => {
  return (
    <div className={classes.question}>
      <h1>{text}</h1>
      <div className={classes.btnWrap}>
        <NavLink to={`/answer/${id}`} className={classes.btn}>Показать ответ</NavLink>
        <div className={classes.btn} onClick={() => increaseIndex()}>Следующий вопрос</div>
      </div>
    </div>
  )
}

export default Question;