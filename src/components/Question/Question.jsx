import React from 'react';
import classes from './Question.module.css';

const Question = ({ text, id, increaseIndex }) => {
  console.log(id)
  return (
    <div className={classes.question}>
      <h1>{text}</h1>
      <div className={classes.btnWrap}>
        <a className={classes.btn} href={`/answer/${id}`}>Показать ответ</a>
        <div className={classes.btn} onClick={() => increaseIndex()}>Следующий вопрос</div>
      </div>
    </div>
  )
}

export default Question;