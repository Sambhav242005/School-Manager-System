"use client";
import React, { useState } from "react";
import Question from "@/components/student/test/question";
import Link from "next/link";

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
  const [answers, setAnswers] = useState<Question[]>([]);

  function handleAnswer(
    option: string,
    thisQuestion: string,
    correctAnswer: string
  ) {
    // Check if the answer for this question is already in the answers array
    const existingAnswer = answers.find(
      (item) => item.question === thisQuestion
    );

    if (existingAnswer) {
      // If the answer exists, update the answer for this question
      const updatedAnswers = answers.map((item) =>
        item.question === thisQuestion ? { ...item, answer: option } : item
      );
      setAnswers(updatedAnswers);
    } else {
      // If the answer does not exist, add it to the answers array
      setAnswers([
        ...answers,
        {
          question: thisQuestion,
          answer: option,
          correctAnswer: correctAnswer,
        },
      ]);
    }
  }
  console.log(answers);

  return (
    <>
      <div className="w-full p-4 text-xl flex flex-row space-x-5 text-white">
        <p>Test Series</p>
        <p>Subject</p>
        <p>Total Marks </p>
        <button>Exit</button>
      </div>
      <Question onSelectOption={handleAnswer} questions={questions}></Question>
      <Link href="/user/{id}?interests={JSON.stringify(data)}">
        Go to report page
      </Link>
    </>
  );
}
