import React, { useState } from 'react';
import classes from './Menu.module.css';
import cn from 'classnames';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const onClickBtn = () => {
    if (!activeMenu) {
      setActiveMenu(true);
    } else {
      setActiveMenu(false);
    }
  }

  return (
    <div>

      <div className={cn(classes.menu, { [classes.activeMenu]: activeMenu })}>
        <div className={classes.listTitle}>Общее</div>
        <ul className={classes.list}>
          <li><NavLink to="/answer/basic-1" className={classes.link}
            activeClassName={classes.active}>Что такое принцип "Разделение ответственностей"?</NavLink></li>
          <li><NavLink to="/answer/basic-2" className={classes.link}
            activeClassName={classes.active}>Что такое DOM?</NavLink></li>
          <li><NavLink to="/answer/basic-3" className={classes.link}
            activeClassName={classes.active}>Что означает "Иммутабельность"?</NavLink></li>
          <li><NavLink to="/answer/basic-4" className={classes.link}
            activeClassName={classes.active}>Чем являются чистые функции?</NavLink></li>
        </ul>
        <div className={classes.listTitle}>React</div>
        <ul className={classes.list}>
          <li><NavLink to="/answer/react-1" className={classes.link}
            activeClassName={classes.active}>Что такое React.js?</NavLink></li>
          <li><NavLink to="/answer/react-2" className={classes.link}
            activeClassName={classes.active}>Что такое JSX?</NavLink></li>
          <li><NavLink to="/answer/react-3" className={classes.link}
            activeClassName={classes.active}>Чем являются "элементы" в React?</NavLink></li>
          <li><NavLink to="/answer/react-4" className={classes.link}
            activeClassName={classes.active}>Чем являются "компоненты" в React?</NavLink></li>
          <li><NavLink to="/answer/react-5" className={classes.link}
            activeClassName={classes.active}>Что такое props?</NavLink></li>
        </ul>
      </div>
      <div className={classes.btn} onClick={() => onClickBtn()}>
        <div className={cn({ [classes.arrowWrap]: !activeMenu }, { [classes.arrowNotVisible]: activeMenu })}>
          <div className={classes.arrow}>&#5169;</div>
          <div className={classes.arrow}>&#5167;</div>
        </div>
        <div className={cn({ [classes.cross]: activeMenu }, { [classes.crossNotVisible]: !activeMenu })}>
          &#215;
        </div>
      </div>
    </div>
  )
}

export default Menu;