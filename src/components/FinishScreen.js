import { useQuiz } from "../contexts/QuizContext";
import React from 'react';


function FinishScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();

  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <div className="finish-screen p-6 bg-white shadow-md rounded-lg text-center">
      <p className="result text-2xl font-bold text-gray-800 mb-4">
        <span className="text-4xl">{emoji}</span> You scored{" "}
        <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore text-lg text-gray-600 mb-6">
        (Highscore: {highscore} points)
      </p>
      <button
        className="btn btn-ui px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </div>
  );
}


export default FinishScreen;
