import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(() => parseInt(localStorage.getItem('score')) || 0);
  const [showScore, setShowScore] = useState(() => JSON.parse(localStorage.getItem('showScore')) || false);
  const [currentQuestion, setCurrentQuestion] = useState(() => parseInt(localStorage.getItem('currentQuestion')) || 0);
  const [quizStarted, setQuizStarted] = useState(() => JSON.parse(localStorage.getItem('quizStarted')) || false);

  const questions = [
    {
      questionText: 'When was Ryan born?',
      answerOptions: [
        { answerText: 'Leitrim', isCorrect: false },
        { answerText: 'Dublin', isCorrect: false },
        { answerText: 'Sligo', isCorrect: false },
        { answerText: 'Cavan', isCorrect: true },
      ],
    },
    {
      questionText: 'What did he study in college?',
      answerOptions: [
        { answerText: 'Mathematics', isCorrect: false },
        { answerText: 'Physics', isCorrect: false },
        { answerText: 'Computer Science', isCorrect: true },
        { answerText: 'Software Engineering', isCorrect: false },
      ],
    },
    {
      questionText: 'What\'s his favorite drink?',
      answerOptions: [
        { answerText: 'Coffee', isCorrect: false },
        { answerText: 'Water', isCorrect: false },
        { answerText: 'Coke', isCorrect: true },
        { answerText: 'None of the above', isCorrect: false },
      ],
    },
  ];

  useEffect(() => {
    localStorage.setItem('score', score);
    localStorage.setItem('showScore', showScore);
    localStorage.setItem('currentQuestion', currentQuestion);
    localStorage.setItem('quizStarted', quizStarted);
  }, [score, showScore, currentQuestion, quizStarted]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const getMessage = () => {
    if (score === 3) {
      return { message: "You really know Ryan!", color: "green" };
    } else if (score === 2) {
      return { message: "You have some work to do, no extra points.", color: "orange" };
    } else if (score === 1) {
      return { message: "Do you even know Ryan? -5 points.", color: "red" };
    } else {
      return { message: "I don't think we should talk anymore. -20 points.", color: "red" };
    }
  };

  const { message, color } = getMessage();

  return (
    <div className="App">
      {quizStarted ? (
        showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
            <div style={{ backgroundColor: color, padding: '10px', borderRadius: '5px', marginTop: '10px' }}>
              {message}
            </div>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">{questions[currentQuestion].questionText}</div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )
      ) : (
        <button className="start-quiz-button" onClick={() => setQuizStarted(true)}>Start Quiz</button>
      )}
    </div>
  );
}

export default App;