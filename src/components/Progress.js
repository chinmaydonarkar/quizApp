import { useQuiz } from "../contexts/QuizContext";
import React from 'react';

function Progress() {
  const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz();

  return (
    <header className="progress p-4 bg-orange-300 shadow-md rounded-lg">
      <div className="mb-4">
        <progress
          max={numQuestions}
          value={index + Number(answer !== null)}
          className="w-full h-4 rounded-full overflow-hidden "
        />
      </div>

      <div className="flex justify-between items-center">
        <p className="text-gray-800 font-semibold">
          Question <strong>{index + 1}</strong> / {numQuestions}
        </p>

        <p className="text-gray-800 font-semibold">
          <strong>{points}</strong> / {maxPossiblePoints}
        </p>
      </div>
    </header>
  );
}


export default Progress;
