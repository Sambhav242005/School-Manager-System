import React, { useEffect, useState } from "react";

interface Question {
  options: string[];
  question: string;
  correctAnswer: string;
}

interface TestProps {
  questions: Question[];
  onSelectOption: (
    currentQuestion: number,
    option: string,
    question: string
  ) => void;
}

const TestSeries: React.FC<TestProps> = ({ questions, onSelectOption }) => {
  const [currentQuestion, setCurrentQuestion] = useState(-1);

  const handleStart = (click: string) => {
    if (click == "up") {
      setCurrentQuestion(currentQuestion + 1);
    } else if (click == "down") {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  useEffect(() => {
    if (currentQuestion > questions.length) {
      setCurrentQuestion(0);
    } else if (currentQuestion < -1) {
      setCurrentQuestion(0);
    }
  });

  const handleOptionClick = (option: string, question: string) => {
    setCurrentQuestion(currentQuestion + 1);
    onSelectOption(currentQuestion, option, question);
  };

  return (
    <div className="flex flex-col  justify-center min-h-screen p-10 py-2">
      {currentQuestion === -1 ? (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => handleStart("up")}
        >
          Start Quiz
        </button>
      ) : currentQuestion === questions.length ? (
        <>
          <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md sm:w-1/2 w-full"
              onClick={() => handleStart("down")}
            >
              Pervise Question
            </button>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-semibold text-white mb-4">
            <span className="text-3xl w-min font-normal">
              {currentQuestion + 1}.
            </span>
            {questions[currentQuestion]?.question}
            {/* Use optional chaining */}
          </h1>
          <ul className="block ">
            {questions[currentQuestion]?.options.map((option, index) => (
              <li
                key={index}
                className="bg-gray-100 m-2  p-4 rounded-md cursor-pointer hover:bg-gray-200"
                onClick={() =>
                  handleOptionClick(
                    option,
                    questions[currentQuestion]?.question
                  )
                }
              >
                {String.fromCharCode(97 + index).toUpperCase()}. {option}
              </li>
            ))}
          </ul>
          <div className="flex">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md sm:w-1/2 w-full"
              onClick={() => handleStart("down")}
            >
              Pervise Question
            </button>
            <button
              className="bg-blue-500 text-white mx-2 py-2 rounded-md sm:w-1/2 w-full"
              onClick={() => handleStart("up")}
            >
              Next Question
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TestSeries;
