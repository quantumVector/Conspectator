import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';
import './App.css';
import Question from './components/Question/Question';
import Answer from './components/Answers/Answer';
import Menu from './components/Menu/Menu';

function App({ all }) {
  const [index, setIndex] = useState(0);

  const increaseIndex = () => {
    index === all.length - 1 ? setIndex(0) : setIndex(index + 1);
  }

  return (
    <div className="app">
      <Switch>
        <Route exact path='/' render={() => <Redirect to={"/question"} />} />
        <Route path="/question" render={() => <Question text={all[index].question}
          id={all[index].id}
          increaseIndex={increaseIndex} />}
        />
        <Route path="/answer/:id" render={() => <Answer increaseIndex={increaseIndex} />} />
      </Switch>
      <Menu />
    </div>
  );
}

const mapStateToProps = (state) => ({
  all: state.app.all
});

export default compose(
  connect(mapStateToProps, {})
)(App);
