import React from 'react';
import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

function Question() {
  const { questions, index } = useQuiz();
  const question = questions[index];

  if (!question) return null;

  return (
    <div className="p-6 bg-white shadow-md rounded-lg mb-4">
      <h4 className="text-xl font-bold mb-4 text-gray-900">{question.question}</h4>
      <Options question={question} />
    </div>
  );
}


export default Question;
