import React from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import classes from './Answer.module.css';
import basicCollection from './Basic/basicCollection';
import reactCollection from './React/reactCollection';

const Answer = () => {
  const { id } = useParams();
  const collection = [...basicCollection, ...reactCollection];
  const Content = collection.find(obj => obj.id === id).content;

  return <div className={classes.answerContainer}>
    <Content />
    <NavLink to="/" className={classes.btn}>Следующий вопрос</NavLink>
  </div>
}

export default Answer;