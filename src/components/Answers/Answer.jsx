import React from 'react';
import { useParams } from 'react-router';
import basicCollection from './Basic/basicCollection';
import reactCollection from './React/reactCollection';

const Answer = (props) => {
  const { id } = useParams();
  const collection = [...basicCollection, ...reactCollection];
  const answer = collection.find(obj => obj.id === id);
  const Component = answer.content;

  return <Component />
}

export default Answer;