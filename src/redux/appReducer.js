import basicQuestions from "./questions/basicQustions";
import reactQuestions from "./questions/reactQuestions";

const shuffle = (arr) => {
  let shuffledArray = arr;

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};

const initialState = {
  general: shuffle(basicQuestions),
  react: shuffle(reactQuestions),
  all: shuffle([...basicQuestions, ...reactQuestions]),
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default appReducer;