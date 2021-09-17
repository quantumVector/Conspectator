import reactQuestions from "./questions/reactQuestions";
import generalQuestions from "./questions/generalQustions";

const shuffle = (arr) => {
  let shuffledArray = arr;

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};

const initialState = {
  general: shuffle(generalQuestions),
  react: shuffle(reactQuestions),
  all: shuffle([...generalQuestions, ...reactQuestions]),
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default appReducer;