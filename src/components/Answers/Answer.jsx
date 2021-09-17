import React from 'react';
import { useParams } from 'react-router';

const Answer = (props) => {
  const { id } = useParams();
  console.log(id)

  return (
    <div>Answer</div>
  )
}

export default Answer;