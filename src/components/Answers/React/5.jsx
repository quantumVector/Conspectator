import React from 'react';
import classes from '../Answer.module.css';

const ReactAnswerId5 = () => {
  return (
    <div className={classes.answer}>
      <h1>Что такое props?</h1>
      <p>props (пропсы) — это входные данные React-компонентов, передаваемые от родительского компонента дочернему компоненту.</p>
      <p>Помните, props предназначены только для чтения. Ни в каком случае их не следует изменять.</p>
    </div>
  )
}

export default ReactAnswerId5;