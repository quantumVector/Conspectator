import React from 'react';
import classes from '../Answer.module.css';

const ReactAnswerId1 = () => {
  return (
    <div className={classes.answer}>
      <h1>Что такое React.js?</h1>
      <p>React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.</p>
      <p>React был придуман одним из разработчиков Facebook, а именно Джорданом Валке, именно он и создал React и впервые использовал в новостной ленте Facebook в 2011 году, чуть позже данную технологию внедрили и в ленту Instagram.</p>
      <p>В самом начале он был разработан как закрытая технология, только для разработчиков Facebook. Однако на одной из конференций в 2013 году, его код стал полностью открытым и React стал доступен каждому программисту.</p>
    </div>
  )
}

export default ReactAnswerId1;