import React from "react";
import { useNavigate } from "react-router-dom";

interface Question {
  correctAnswer: string;
  question: string;
  answer: string;
}
interface ResultProps {
  answers: Question[];
}

const ResultPage: React.FC<ResultProps> = ({ answers }) => {
  // Calculate the score based on the correct answers in the 'answers' array
  const score = answers.reduce((acc, answer) => {
    if (answer.answer === answer.correctAnswer) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const history = useNavigate();

  return (
    <div>
      <h1>Test Results</h1>
      <p>Your score: {score}</p>
      {/* Display the user's answers here */}
      {answers.map((answer, index) => (
        <p key={index}>
          Question: {answer.question}
          <br />
          Your answer: {answer.answer}
          <br />
          Correct answer: {answer.correctAnswer}
        </p>
      ))}
      <button onClick={() => history("/")}>Go back to home</button>
    </div>
  );
};

export default ResultPage;
