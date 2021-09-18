import React from 'react';
import classes from '../Answer.module.css';

const ReactAnswerId2 = () => {
  return (
    <div className={classes.answer}>
      <h1>Что такое JSX?</h1>
      <p>Это JSX — расширение языка JavaScript. Он используется, когда требуется объяснить React, как должен выглядеть UI. JSX напоминает язык шаблонов, наделённый силой JavaScript.</p>
      <p>JSX производит «элементы» React.</p>
      <p>React можно использовать и без JSX, но большинство людей ценит его за наглядность при работе с UI, живущем в JavaScript-коде.</p>
    </div>
  )
}

export default ReactAnswerId2;