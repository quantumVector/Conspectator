import React from 'react';
import classes from '../Answer.module.css';

const ReactAnswerId3 = () => {
  return (
    <div className={classes.answer}>
      <h1>Чем являются "элементы" в React?</h1>
      <p>Элементы — мельчайшие кирпичики React-приложений.</p>
      <p>Элемент описывает то, что вы хотите увидеть на экране.</p>
      <p>В отличие от DOM-элементов, элементы React — это простые объекты, не отнимающие много ресурсов. React DOM обновляет DOM, чтобы он соответствовал переданным React-элементам.</p>
    </div>
  )
}

export default ReactAnswerId3;