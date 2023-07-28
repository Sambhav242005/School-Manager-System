"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface AnswerProp {
  correctAnswer: string;
  question: string;
  answer: string;
}

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

export default function () {
  const searchParams = useSearchParams();
  const dataString = searchParams.get("data");
  const [data, setData] = useState<AnswerProp[]>([]);

  useEffect(() => {
    if (dataString) {
      try {
        const parsedData: AnswerProp[] = JSON.parse(
          decodeURIComponent(dataString)
        );
        setData(parsedData);
      } catch (error) {
        console.error("Error parsing data:", error);
      }
    }
  }, [dataString]);

  return (
    <div className="flex flex-col items-start p-8 pl-0 pb-0 bg-white">
      <h1 className="text-3xl font-bold mb-4 w-full text-center">
        Report Card
      </h1>
      <div className="w-full">
        {data.map((item, index) => (
          <div
            key={index}
            className={index % 2 === 0 ? "bg-gray-200 p-4" : "bg-gray-400 p-4"}
          >
            <div className="text-xl font-bold mb-2">Question:</div>
            <div className="ml-4">{item.question}</div>
            <div className="text-xl font-bold mt-4 mb-2">Options:</div>
            <div className="ml-4">{questions[index].options.join(", ")}</div>
            <div className="text-xl font-bold mt-4">Answer:</div>
            <div className="ml-4">{item.answer}</div>
            <div className="text-xl font-bold mt-4">Correct Answer:</div>
            <div className="ml-4">{item.correctAnswer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
