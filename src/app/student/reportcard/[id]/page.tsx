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

const YourComponent = () => {
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
    <div className="bg-gray-800 text-white p-4">
      <h1 className="text-3xl font-bold mb-4">Hello</h1>
      {data.length > 0 ? (
        <ul className="space-y-4">
          {data.map((item, index) => (
            <li key={index}>
              <strong>Question:</strong> {item.question}
              <br />
              <strong>Options:</strong> {questions[index].options.join(", ")}
              {/* Get options from the questions array */}
              <br />
              <strong>Answer:</strong> {item.answer}
              <br />
              <strong>Correct Answer:</strong> {item.correctAnswer}
              <br />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg">No data found.</p>
      )}
    </div>
  );
};

export default YourComponent;
