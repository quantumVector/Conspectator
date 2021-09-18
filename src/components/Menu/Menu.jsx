import React from 'react';
import classes from './Menu.module.css';

const Menu = () => {
  return (
    <div className={classes.modal}>
      <div className={classes.listTitle}>Общее</div>
      <ul className={classes.list}>
        <li><a href="/answer/basic-1" className={classes.link}>Что такое принцип "Разделение ответственностей"?</a></li>
        <li><a href="/answer/basic-2" className={classes.link}>Что такое DOM?</a></li>
        <li><a href="/answer/basic-3" className={classes.link}>Что означает "Иммутабельность"?</a></li>
        <li><a href="/answer/basic-4" className={classes.link}>Чем являются чистые функции?</a></li>
      </ul>
      <div className={classes.listTitle}>React</div>
      <ul className={classes.list}>
        <li><a href="/answer/react-1" className={classes.link}>Что такое React.js?</a></li>
        <li><a href="/answer/react-2" className={classes.link}>Что такое JSX?</a></li>
        <li><a href="/answer/react-3" className={classes.link}>Чем являются "элементы" в React?</a></li>
        <li><a href="/answer/react-4" className={classes.link}>Чем являются "компоненты" в React?</a></li>
        <li><a href="/answer/react-5" className={classes.link}>Что такое props?</a></li>
      </ul>
    </div>
  )
}

export default Menu;