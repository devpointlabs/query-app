import React from 'react';
import Quiz from './Quiz';

const QuizList = ({ quizzes, editQuiz, deleteQuiz, }) => (
  <div>
    { quizzes.map( quiz =>
      <Quiz
        key={quiz.id}
        {...quiz}
        editQuiz={editQuiz}
        deleteQuiz={deleteQuiz}
      />
    )}
  </div>
)

export default QuizList;