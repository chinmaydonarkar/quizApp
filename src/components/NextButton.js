import React from 'react';
import { useQuiz } from "../contexts/QuizContext";

function NextButton() {
  const { dispatch, answer, index, numQuestions } = useQuiz();

  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-green-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-red-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}


export default NextButton;
