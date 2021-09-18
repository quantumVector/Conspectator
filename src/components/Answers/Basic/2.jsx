import React from 'react';
import classes from '../Answer.module.css';

const basicAnswerId2 = () => {
  return (
    <div className={classes.answer}>
      <h1>Что такое DOM?</h1>
      <p>Основой HTML-документа являются теги.</p>
      <p>В соответствии с объектной моделью документа («Document Object Model», коротко DOM), каждый HTML-тег является объектом. Вложенные теги являются «детьми» родительского элемента. Текст, который находится внутри тега, также является объектом.</p>
      <p>Все эти объекты доступны при помощи JavaScript, мы можем использовать их для изменения страницы.</p>
    </div>
  )
}

export default basicAnswerId2;