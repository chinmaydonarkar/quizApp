import { useQuiz } from "../contexts/QuizContext";
import React from 'react';

function Options({ question }) {
  const { dispatch, answer } = useQuiz();

  const hasAnswered = answer !== null;

  return (
    <div className="grid grid-cols-1 gap-4">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option px-4 py-2 rounded-lg text-white font-semibold transition duration-300 ${
            index === answer ? "bg-blue-500" : "bg-gray-400"
          } ${
            hasAnswered
              ? index === question.correctOption
                ? "bg-green-600"
                : index === answer
                ? "bg-red-500"
                : "bg-gray-400"
              : "hover:bg-blue-500"
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}


export default Options;
