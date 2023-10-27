import React, { useState } from 'react'

const Result = () => {


    const [accuracy, setAccuracy] = useState(0);
    const [averageScore, setAverageScore] = useState(0);
    const [topScore, setTopScore] = useState(0);
    const [liveRank, setLiveRank] = useState(0);

    
    const calculateResult = () => {
        // Calculate accuracy
        const totalAttempted = answeredQuestions.length;
        const totalCorrect = result.correctAnswers;
        const calculatedAccuracy = (totalCorrect / totalAttempted) * 100;
        setAccuracy(calculatedAccuracy.toFixed(2));

        // Calculate average score
        const calculatedAverageScore = result.score / totalAttempted;
        setAverageScore(calculatedAverageScore.toFixed(2));

        // Placeholder for live ranking data - Replace this with actual data
        const calculatedTopScore = 100;
        const calculatedLiveRank = 1;

        setTopScore(calculatedTopScore);
        setLiveRank(calculatedLiveRank);
    };
  return (
    <div>
       <div className="result">
                            <h3>Result</h3>
                            <p>
                                Total Questions: <span>{questions.length}</span>
                            </p>
                            <p>
                                Total Score:<span> {result.score}</span>
                            </p>
                            <p>
                                Correct Answers:<span> {result.correctAnswers}</span>
                            </p>
                            <p>
                                Wrong Answers:<span> {result.wrongAnswers}</span>
                            </p>
                            <p>
                                Accuracy:<span> {accuracy}%</span>
                            </p>
                            <p>
                                Average Score:<span> {averageScore}</span>
                            </p>
                            <p>
                                Top Score:<span> {topScore}</span>
                            </p>
                            <p>
                                Live Rank:<span> {liveRank}</span>
                            </p>
                        </div>
    </div>
  )
}

export default Result
