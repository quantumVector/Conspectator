import React from 'react';
import classes from '../Answer.module.css';

const basicAnswerId1 = () => {
  return (
    <div className={classes.answer}>
      <h1>Что такое принцип "Разделение ответственностей"?</h1>
      <p>один из основополагающих принципов инженерного дела. В частности — программной инженерии.</p>
      <p>В информатике разделение ответственностей представляет собой процесс разделения компьютерной программы на функциональные блоки, как можно меньше перекрывающие функции друг друга. В более общем случае, разделение ответственностей — это упрощение единого процесса решения задачи путём разделения на взаимодействующие процессы по решению подзадач.</p>
      <p>Разделение ответственности (separation of concerns, SoC) – программа должны состоять из функциональных блоков, как можно меньше дублирующих функциональность друг друга (Эдсгер Дейкстра).</p>
      <p>Термин Separation of Concerns был впервые предложен Эдсгером Дейкстрой в 1974 году в статье «On the role of scientific thought»для описания процесса научного мышления. В современном значении этот термин был использован в 1989 году Крисом Ридом в его книге «Элементы функционального программирования».</p>
    </div>
  )
}

export default basicAnswerId1;