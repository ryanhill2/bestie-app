import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './Menu';
import AboutRaj from './AboutRaj';

function App() {
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    localStorage.clear();
  }, []);

  const questions = [
    {
      questionText: 'What month was Ryan born in?',
      answerOptions: [
        { answerText: 'January', isCorrect: false },
        { answerText: 'February', isCorrect: false },
        { answerText: 'October', isCorrect: true },
        { answerText: 'December', isCorrect: false },
      ],
    },
    {
      questionText: 'Who\'s Ryan\'s best friend?',
      answerOptions: [
        { answerText: 'Abraham', isCorrect: false },
        { answerText: 'Kris', isCorrect: true },
        { answerText: 'Abro', isCorrect: false },
        { answerText: 'Tom', isCorrect: false },
      ],
    },
    {
      questionText: 'Who\'s Ryan\'s little crush?',
      answerOptions: [
        { answerText: 'Anna', isCorrect: false },
        { answerText: 'Sara', isCorrect: false },
        { answerText: 'Raj', isCorrect: true },
        { answerText: 'Other', isCorrect: false },
      ],
    },
  ];

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

  const Home = () => (
    <div className="App">
      <div className="image-container">
        <img src={`${process.env.PUBLIC_URL}/ryan-and-raj.jpg`} alt="Ryan and Raj" />
      </div>
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

  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-raj" element={<AboutRaj />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;