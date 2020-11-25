import React, { useState } from "react";
import { fetchQuizQuestions } from "./API";
import QuestionCard from "./components/QuestionCard";
import { Difficulty } from "./API";
const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false),
    [questions, setQuestions] = useState([]),
    [number, setNumber] = useState(0),
    [userAnswers, setUserAnswers] = useState([]),
    [score, setScore] = useState(0),
    [gameOver, setGameOver] = useState(true);

  console.log(
    "fetchQuiz",
    fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY)
  );

  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div>
      <h1>React Quiz</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions ...</p>
      {/* <QuestionCard
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Questions
      </button>
    </div>
  );
};

export default App;
