import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";
import React from 'react';


function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer text-xl font-bold text-blue-600 bg-white p-4 rounded-md shadow-md w-24 text-center">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}


export default Timer;
