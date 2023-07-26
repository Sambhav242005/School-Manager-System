"use client";
import React, { useState } from "react";
import Question from "@/components/student/test/question";
import { useParams } from "next/navigation";

const questions = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
  },
  {
    question: "What is 2 + 4?",
    options: ["3", "4", "5", "316146161616161 dfsgffsdfsfsf"],
    correctAnswer: "4",
  },
  {
    question: "What is 2 + 3?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
  },
];

interface Question {
  correctAnswer: string;
  question: string;
  answer: string;
}

export default function Home() {
  const id = useParams().id;
  console.log(id);

  const [answers, setAnswers] = useState<Question[]>([]);

  function handleAnswer(
    currentQuestion: number,
    option: string,
    correctAnswer: string
  ) {
    const currentQuestionObj = questions[currentQuestion];

    // Check if the answer for this question is already in the answers array
    const existingAnswerIndex = answers.findIndex(
      (item) => item.question === currentQuestionObj.question
    );

    if (existingAnswerIndex !== -1) {
      // If the answer exists, update the answer for this question
      const updatedAnswers = [...answers];
      updatedAnswers[existingAnswerIndex] = {
        ...updatedAnswers[existingAnswerIndex],
        answer: option,
      };
      setAnswers(updatedAnswers);
    } else {
      // If the answer does not exist, add it to the answers array
      setAnswers((prevAnswers) => [
        ...prevAnswers,
        {
          question: currentQuestionObj.question,
          answer: option,
          correctAnswer: correctAnswer,
        },
      ]);
    }
  }

  return (
    <>
      <div className="w-full p-4 text-xl flex flex-row space-x-5 text-white">
        <p>Test Series</p>
        <p>Subject</p>
        <p>Total Marks </p>
        <button>Exit</button>
      </div>

      <a
        href={
          `/student/reportcard/` + id + `?data=` + JSON.stringify(answers) + ``
        }
        className=" p-4 m-5 text-3xl  text-white"
      >
        Go to report page
      </a>
      <Question onSelectOption={handleAnswer} questions={questions}></Question>
    </>
  );
}
