import { useQuiz } from "../contexts/QuizContext";
import React from 'react';

function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();

  return (
    <div className="start-screen p-8 bg-blue-100 shadow-lg rounded-lg text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Welcome to The React Quiz!
      </h2>
      <h3 className="text-xl text-gray-700 mb-6">
        {numQuestions} questions to test your React mastery
      </h3>
      <button
        className="btn btn-ui px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}


export default StartScreen;
