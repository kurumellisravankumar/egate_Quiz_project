// test commit

// import React, { useEffect, useState } from 'react';
// import quiz from '../../Data/quesAns'
// import './Paper.css'
// import RightSidebar from '../../Components/RightSidebar/RightSidebar';
// import PaperHeader from '../../Components/PaperHeader/PaperHeader'

// // Defining Timer code
// const formatTime = (time) => {
//     let minutes = Math.floor(time / 60);
//     let seconds = Math.floor(time - minutes * 60);

//     if (minutes < 10) minutes = '0' + minutes;
//     if (seconds < 10) seconds = '0' + seconds;
//     return minutes + ':' + seconds;
// }; // End of Defining Timer code

// const Paper = ({ seconds, answeredQuestions }) => {

//     const [activeQuestion, setActiveQuestion] = useState(0);
//     const handleQuestionSelect = (questionNumber) => {
//         setActiveQuestion(questionNumber - 1);
//     }

//     // const [questionStatus, setQuestionStatus] = useState(Array(30).fill('notAnswered'))
//     // const [activeQuestion, setActiveQuestion] = useState(0)
//     // const [selectedAnswer, setSelectedAnswer] = useState('')

//     const [selectedAnswers, setSelectedAnswers] = useState(new Array(quiz.questions.length).fill(''));
//     const [showResult, setShowResult] = useState(false)
//     const [result, setResult] = useState({
//         score: 0,
//         correctAnswers: 0,
//         wrongAnswers: 0,
//     })

//     const { questions } = quiz
//     const { question, choices, correctAnswer } = questions[activeQuestion]
//     const onClickNext = () => {
//         setResult((prev) =>
//             selectedAnswers[activeQuestion] === correctAnswer
//                 ? {
//                     ...prev,
//                     score: prev.score + 5,
//                     correctAnswers: prev.correctAnswers + 1,
//                 }
//                 : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
//         );
//         if (activeQuestion !== questions.length - 1) {
//             setActiveQuestion((prev) => prev + 1);
//         } else {
//             // setActiveQuestion(0);
//             setShowResult(true);
//             calculateResult();//new added code
//         }
//     };

//     const onAnswerSelected = (OptionLetter) => {
//         // Update the selected answer for the current question
//         const updatedSelectedAnswers = [...selectedAnswers];
//         updatedSelectedAnswers[activeQuestion] = OptionLetter;
//         setSelectedAnswers(updatedSelectedAnswers);
//         // setSelectedAnswers(updatedSelectedAnswers, OptionLetter);

//     };

//     const clearResponse = () => {
//         // Clear the response for the current question
//         const updatedSelectedAnswers = [...selectedAnswers];
//         updatedSelectedAnswers[activeQuestion] = '';
//         setSelectedAnswers(updatedSelectedAnswers);
//     };

//     const goToPreviousQuestion = () => {
//         // Move to the previous question
//         if (activeQuestion > 0) {
//             setActiveQuestion((prev) => prev - 1);
//         }
//     };

//     const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)
//     const [countdown, setCountDown] = useState(seconds);
//     useEffect(() => {
//         const timerId = setInterval(() => {
//             setCountDown((prevCountDown) =>
//                 prevCountDown - 1
//             );
//         }, 1000)
//         return () => {
//             clearInterval(timerId);
//         };
//     }, [])

//     useEffect(() => {
//         if (countdown <= 0) {
//             setShowResult(true);
//             // clearInterval(timerId.current);
//             // alert("End");
//         }
//     }, [countdown]);

//    // NEW ADDED CODE

//     // const [showResult, setShowResult] = useState(false);
//     const [accuracy, setAccuracy] = useState(0);
//     const [averageScore, setAverageScore] = useState(0);
//     const [topScore, setTopScore] = useState(0);
//     const [liveRank, setLiveRank] = useState(0);

//     const calculateResult = () => {
//         // Calculate accuracy
//         const totalAttempted = answeredQuestions.length;
//         const totalCorrect = result.correctAnswers;
//         const calculatedAccuracy = (totalCorrect / totalAttempted) * 100;
//         setAccuracy(calculatedAccuracy.toFixed(2));

//         // Calculate average score
//         const calculatedAverageScore = result.score / totalAttempted;
//         setAverageScore(calculatedAverageScore.toFixed(2));

//         // Placeholder for live ranking data - Replace this with actual data
//         const calculatedTopScore = 100;
//         const calculatedLiveRank = 1;

//         setTopScore(calculatedTopScore);
//         setLiveRank(calculatedLiveRank);
//     };

//     // const onClickSubmit = () => {
//     //     calculateResult();
//     //     setShowResult(true);
//     // };

//     return (

//         <div className='main'>
//             <div className='sub-main'>
//                 <div><PaperHeader /></div>
//                 <div className="quiz-container">
//                     {!showResult ? (
//                         <div>
//                             <div className='subjects'>
//                                 <button className='subject-btn'>Mathematics</button>
//                                 <button className='subject-btn'>Physics</button>
//                                 <button className='subject-btn'>Chemistry</button>
//                             </div>
//                             <div className='second-header'>
//                                 <div className='single-select-question'>
//                                     Single Select Question
//                                 </div>
//                                 <div className='right-header'>
//                                     <div className='marks'>
//                                         Marks: <div className='plus-mark'>+1</div>
//                                         <div className='minus-mark'>-1</div>
//                                     </div>
//                                     <div className='timer'>
//                                         <h3>Time Left: {formatTime(countdown)}</h3>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='question-no'>
//                                 <span className="active-question-no">Question No. {addLeadingZero(activeQuestion + 1)}</span>
//                                 <span className="total-question"> of {addLeadingZero(questions.length)}</span>
//                             </div>

//                             <h2 className='question'><img src={question} alt="question" /></h2>

//                             <ul className='options-container'>
//                                 {choices.map((answer, index) => (
//                                     <li key={answer}>
//                                         <input type="radio"
//                                             // id={answer}
//                                             id={`option-${index}`}
//                                             name='answer'
//                                             value={answer}
//                                             checked={selectedAnswers[activeQuestion] === answer}
//                                             onChange={() => onAnswerSelected(answer)} />

//                                         <label className='alpha-index' htmlFor={`option-${index}`}>
//                                             {/* htmlFor={answer} */}
//                                             {String.fromCharCode(65 + index)}.
//                                             <img src={answer} alt="answer" />
//                                         </label>
//                                     </li>
//                                 ))}
//                             </ul>

//                             <div className="flex-right">
//                                 <button className='clear-btn'>Mark for Review & Next</button>
//                                 <button className='clear-btn' onClick={clearResponse}>Clear Response</button>
//                                 <button className='previous-btn' onClick={goToPreviousQuestion} disabled={activeQuestion === 0}>
//                                     <i class="fa-solid fa-angles-left"></i>
//                                     Previous
//                                 </button>
//                                 <button className='save-btn' onClick={onClickNext} disabled={!selectedAnswers[activeQuestion]}>
//                                     {activeQuestion === questions.length - 1 ? 'Submit' : 'Save & Next'}<i class="fa-solid fa-angles-right"></i>
//                                 </button>

//                             </div>
//                         </div>
//                     ) : (
//                         <div className="result">
//                             <h3>Result</h3>
//                             <p>
//                                 Total Questions: <span>{questions.length}</span>
//                             </p>
//                             <p>
//                                 Total Score:<span> {result.score}</span>
//                             </p>
//                             <p>
//                                 Correct Answers:<span> {result.correctAnswers}</span>
//                             </p>
//                             <p>
//                                 Wrong Answers:<span> {result.wrongAnswers}</span>
//                             </p>
//                             <p>
//                                 Accuracy:<span> {accuracy}%</span>
//                             </p>
//                             <p>
//                                 Average Score:<span> {averageScore}</span>
//                             </p>
//                             <p>
//                                 Top Score:<span> {topScore}</span>
//                             </p>
//                             <p>
//                                 Live Rank:<span> {liveRank}</span>
//                             </p>
//                         </div>
//                     )}
//                 </div>
//             </div>
//             <div className='rightsidebar'><RightSidebar onQuestionSelect={handleQuestionSelect} answeredQuestions={answeredQuestions} /></div>
//         </div>

//     )
// }

// export default Paper

// import React, { useEffect, useState } from 'react';
// // import quiz from '../../Data/quesAns'
// import './Paper.css'
// // import RightSidebar from '../../Components/RightSidebar/RightSidebar';
// import PaperHeader from '../../Components/PaperHeader/PaperHeader'

// // Defining Timer code
// // const formatTime = (time) => {
// //     let minutes = Math.floor(time / 60);
// //     let seconds = Math.floor(time - minutes * 60);

// //     if (minutes < 10) minutes = '0' + minutes;
// //     if (seconds < 10) seconds = '0' + seconds;
// //     return minutes + ':' + seconds;
// // }; // End of Defining Timer code

// const Paper = () => {

//     // const [activeQuestion, setActiveQuestion] = useState(0);
//     // const handleQuestionSelect = (questionNumber) => {
//     //     setActiveQuestion(questionNumber - 1);
//     // }

//     // const [questionStatus, setQuestionStatus] = useState(Array(30).fill('notAnswered'))
//     // const [activeQuestion, setActiveQuestion] = useState(0)
//     // const [selectedAnswer, setSelectedAnswer] = useState('')

//     // const [selectedAnswers, setSelectedAnswers] = useState(new Array(quiz.questions.length).fill(''));
//     // const [showResult, setShowResult] = useState(false)
//     // const [result, setResult] = useState({
//     //     score: 0,
//     //     correctAnswers: 0,
//     //     wrongAnswers: 0,
//     // })

//     // const { questions } = quiz
//     // const { Qimages, OPTimages, correctAnswer } = [activeQuestion]
//     // const onClickNext = () => {
//     //     setResult((prev) =>
//     //         selectedAnswers[activeQuestion] === correctAnswer
//     //             ? {
//     //                 ...prev,
//     //                 score: prev.score + 5,
//     //                 correctAnswers: prev.correctAnswers + 1,
//     //             }
//     //             : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
//     //     );
//     //     if (activeQuestion !== questions.length - 1) {
//     //         setActiveQuestion((prev) => prev + 1);
//     //     } else {
//     //         // setActiveQuestion(0);
//     //         setShowResult(true);
//     //         calculateResult();//new added code
//     //     }
//     // };

//     // const onAnswerSelected = (OptionLetter) => {
//     //     // Update the selected answer for the current question
//     //     const updatedSelectedAnswers = [...selectedAnswers];
//     //     updatedSelectedAnswers[activeQuestion] = OptionLetter;
//     //     setSelectedAnswers(updatedSelectedAnswers);
//     //     // setSelectedAnswers(updatedSelectedAnswers, OptionLetter);

//     // };

//     // const clearResponse = () => {
//     //     // Clear the response for the current question
//     //     const updatedSelectedAnswers = [...selectedAnswers];
//     //     updatedSelectedAnswers[activeQuestion] = '';
//     //     setSelectedAnswers(updatedSelectedAnswers);
//     // };

//     // const goToPreviousQuestion = () => {
//     //     // Move to the previous question
//     //     if (activeQuestion > 0) {
//     //         setActiveQuestion((prev) => prev - 1);
//     //     }
//     // };

//     // const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)
//     // const [countdown, setCountDown] = useState(seconds);
//     // useEffect(() => {
//     //     const timerId = setInterval(() => {
//     //         setCountDown((prevCountDown) =>
//     //             prevCountDown - 1
//     //         );
//     //     }, 1000)
//     //     return () => {
//     //         clearInterval(timerId);
//     //     };
//     // }, [])

//     // useEffect(() => {
//     //     if (countdown <= 0) {
//     //         setShowResult(true);
//     //         // clearInterval(timerId.current);
//     //         // alert("End");
//     //     }
//     // }, [countdown]);

//     // NEW ADDED CODE

//     // const [showResult, setShowResult] = useState(false);
//     // const [accuracy, setAccuracy] = useState(0);
//     // const [averageScore, setAverageScore] = useState(0);
//     // const [topScore, setTopScore] = useState(0);
//     // const [liveRank, setLiveRank] = useState(0);

//     // const calculateResult = () => {
//     //     // Calculate accuracy
//     //     const totalAttempted = answeredQuestions.length;
//     //     const totalCorrect = result.correctAnswers;
//     //     const calculatedAccuracy = (totalCorrect / totalAttempted) * 100;
//     //     setAccuracy(calculatedAccuracy.toFixed(2));

//     //     // Calculate average score
//     //     const calculatedAverageScore = result.score / totalAttempted;
//     //     setAverageScore(calculatedAverageScore.toFixed(2));

//     //     // Placeholder for live ranking data - Replace this with actual data
//     //     const calculatedTopScore = 100;
//     //     const calculatedLiveRank = 1;

//     //     setTopScore(calculatedTopScore);
//     //     setLiveRank(calculatedLiveRank);
//     // };

//     // const onClickSubmit = () => {
//     //     calculateResult();
//     //     setShowResult(true);
//     // };

//     const [Qimages,setQImages] = useState([]);
//     const [OPTimages,setOPTImages] = useState([]);

//     useEffect(() => {
//         // Fetch data for Qimages (first image from each set of IDs 1-6, 7-12, ...)
//         const fetchQImages = async () => {
//             let fetchedQImages = [];

//             for (let i = 1; i <= 1000; i += 6) { // Assuming there are 100 sets of images
//                 try {
//                     const response = await fetch(`http://localhost:7000/images/${i}`);
//                     const data = await response.json();
//                     if (data.length > 0) {
//                         fetchedQImages.push(data[0]); // Add only the first image from each set
//                     }
//                 } catch (error) {
//                     console.error('Error fetching Qimages:', error);
//                 }
//             }

//             setQImages(fetchedQImages);
//         };

//         // Fetch data for OPTimages (images 2 to 5 from each set of IDs 1-6, 7-12, ...)
//         const fetchOPTImages = async () => {
//             let fetchedOPTImages = [];

//             for (let i = 1; i <= 1000; i += 6) { // Assuming there are 100 sets of images
//                 try {
//                     for (let j = i + 1; j <= i + 4; j++) {
//                         const response = await fetch(`http://localhost:7000/images/${j}`);
//                         const data = await response.json();
//                         if (data.length > 0) {
//                             fetchedOPTImages.push(data[0]); // Add the second to fifth images from each set
//                         }
//                     }
//                 } catch (error) {
//                     console.error('Error fetching OPTimages:', error);
//                 }
//             }

//             setOPTImages(fetchedOPTImages);
//         };

//         fetchQImages();
//         fetchOPTImages();
//     }, []); // Empty dependency array to fetch data only once when the component mounts

//     return (

//         <div className='main'>
//             <div className='sub-main'>
//                 <div><PaperHeader /></div>
//                 <div className="quiz-container">
//                     {/* {!showResult ? ( */}
//                         <div>
//                             <div className='subjects'>
//                                 <button className='subject-btn'>Mathematics</button>
//                                 <button className='subject-btn'>Physics</button>
//                                 <button className='subject-btn'>Chemistry</button>
//                             </div>
//                             <div className='second-header'>
//                                 <div className='single-select-question'>
//                                     Single Select Question
//                                 </div>
//                                 {/* <div className='right-header'>
//                                     <div className='marks'>
//                                         Marks: <div className='plus-mark'>+1</div>
//                                         <div className='minus-mark'>-1</div>
//                                     </div>
//                                     <div className='timer'>
//                                         <h3>Time Left: {formatTime(countdown)}</h3>
//                                     </div>
//                                 </div> */}
//                             </div>
//                             {/* <div className='question-no'>
//                                 <span className="active-question-no">Question No. {addLeadingZero(activeQuestion + 1)}</span>
//                                 <span className="total-question"> of {addLeadingZero(questions.length)}</span>
//                             </div> */}

//                             {Qimages.map((qImage, index) => (
//                                 <div key={index}>
//                                     {/* <h2>QImage {index + 1}</h2> */}
//                                     {/* <div className='question-no'>
//                                         <span className="active-question-no">Question No. {addLeadingZero(activeQuestion + 1)}</span>
//                                         <span className="total-question"> of {addLeadingZero(questions.length)}</span>
//                                     </div> */}
//                                     <h2 className='question'> <img
//                                         src={`data:image/png;base64,${qImage.image_data}`}
//                                         alt={`QImage ${index + 1}`}
//                                     /></h2>

//                                     <ul className='options-container'>
//                                         {OPTimages.slice(index * 4, index * 4 + 4).map((optImage, optIndex) => (
//                                             <li>
//                                                 <input type="radio"
//                                                 // // id={answer}
//                                                 //     id={`option-${index}`}
//                                                 //     name='answer'
//                                                 //     value={optImage}
//                                                 //     checked={selectedAnswers[activeQuestion] === optImage}
//                                                 //     onChange={() => onAnswerSelected(optImage)}
//                                                 />

//                                                 <label className='alpha-index' >
//                                                     <img
//                                                         key={optIndex}
//                                                         src={`data:image/png;base64,${optImage.image_data}`}
//                                                         alt={`OPTImage ${optIndex + 2}-${optIndex + 5}`}
//                                                     />
//                                                 </label>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             ))}

//                             {/* <div className="flex-right">
//                                 <button className='clear-btn'>Mark for Review & Next</button>
//                                 <button className='clear-btn' onClick={clearResponse}>Clear Response</button>
//                                 <button className='previous-btn' onClick={goToPreviousQuestion} disabled={activeQuestion === 0}>
//                                     <i class="fa-solid fa-angles-left"></i>
//                                     Previous
//                                 </button>
//                                 <button className='save-btn' onClick={onClickNext} disabled={!selectedAnswers[activeQuestion]}>
//                                     {activeQuestion === questions.length - 1 ? 'Submit' : 'Save & Next'}<i class="fa-solid fa-angles-right"></i>
//                                 </button>

//                             </div> */}
//                         </div>
//                     {/* ) : ( */}
//                         {/* <div className="result"> */}
//                             {/* <h3>Result</h3>
//                             <p>
//                                 Total Questions: <span>{questions.length}</span>
//                             </p>
//                             <p>
//                                 Total Score:<span> {result.score}</span>
//                             </p>
//                             <p>
//                                 Correct Answers:<span> {result.correctAnswers}</span>
//                             </p>
//                             <p>
//                                 Wrong Answers:<span> {result.wrongAnswers}</span>
//                             </p>
//                             <p>
//                                 Accuracy:<span> {accuracy}%</span>
//                             </p>
//                             <p>
//                                 Average Score:<span> {averageScore}</span>
//                             </p>
//                             <p>
//                                 Top Score:<span> {topScore}</span>
//                             </p>
//                             <p>
//                                 Live Rank:<span> {liveRank}</span>
//                             </p> */}
//                         {/* </div> */}
//                     {/* )} */}
//                 </div>
//             </div>
//             {/* <div className='rightsidebar'><RightSidebar onQuestionSelect={handleQuestionSelect} answeredQuestions={answeredQuestions} /></div> */}
//         </div>

//     )
// }

// export default Paper

// import React, { useEffect, useState } from 'react';
// import './Paper.css';
// import PaperHeader from '../../Components/PaperHeader/PaperHeader';

// const Paper = () => {
//     const [Qimages, setQImages] = useState([]);
//     const [OPTimages, setOPTImages] = useState([]);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

//         useEffect(() => {
//             // Fetch data for Qimages (first image from each set of IDs 1-6, 7-12, ...)
//             const fetchQImages = async () => {
//                 let fetchedQImages = [];

//                 for (let i = 1; i <= 1000; i += 6) { // Assuming there are 100 sets of images
//                     try {
//                         const response = await fetch(`http://localhost:7000/images/${i}`);
//                         const data = await response.json();
//                         if (data.length > 0) {
//                             fetchedQImages.push(data[0]); // Add only the first image from each set
//                         }
//                     } catch (error) {
//                         console.error('Error fetching Qimages:', error);
//                     }
//                 }

//                 setQImages(fetchedQImages);
//             };

//             // Fetch data for OPTimages (images 2 to 5 from each set of IDs 1-6, 7-12, ...)
//             const fetchOPTImages = async () => {
//                 let fetchedOPTImages = [];

//                 for (let i = 1; i <= 1000; i += 6) { // Assuming there are 100 sets of images
//                     try {
//                         for (let j = i + 1; j <= i + 4; j++) {
//                             const response = await fetch(`http://localhost:7000/images/${j}`);
//                             const data = await response.json();
//                             if (data.length > 0) {
//                                 fetchedOPTImages.push(data[0]); // Add the second to fifth images from each set
//                             }
//                         }
//                     } catch (error) {
//                         console.error('Error fetching OPTimages:', error);
//                     }
//                 }

//                 setOPTImages(fetchedOPTImages);
//             };

//             fetchQImages();
//             fetchOPTImages();
//         }, []); // Empty dependency array to fetch data only once when the component mounts

//     const handleNextClick = () => {
//         // Move to the next question when the "Next" button is clicked
//         setCurrentQuestionIndex(prevIndex => prevIndex + 1);
//     };

//     return (
//         <div className='main'>
//             {/* ... */}
//             <div><PaperHeader /></div>
//             <div className='options-container'>
//                 {/* Display only the current question and its options */}
//                 <h2 className='question'>
//                     <img
//                         src={`data:image/png;base64,${Qimages[currentQuestionIndex].image_data}`}
//                         alt={`QImage ${currentQuestionIndex + 1}`}
//                     />
//                 </h2>
//                 <ul className='options-container'>
//                     {OPTimages
//                         .slice(currentQuestionIndex * 4, currentQuestionIndex * 4 + 4)
//                         .map((optImage, optIndex) => (
//                             <li key={optIndex}>
//                                 <input type="radio" />
//                                 <label className='alpha-index'>
//                                     <img
//                                         src={`data:image/png;base64,${optImage.image_data}`}
//                                         alt={`OPTImage ${optIndex + 2}-${optIndex + 5}`}
//                                     />
//                                 </label>
//                             </li>
//                         ))}
//                 </ul>
//                 <button onClick={handleNextClick}>Next</button>
//             </div>
//             {/* ... */}
//         </div>
//     );
// };

// export default Paper;

// import React, { useEffect, useState } from 'react';
// import './Paper.css';
// import PaperHeader from '../../Components/PaperHeader/PaperHeader';
// // import { Waveform } from '@uiball/loaders'

// const Paper = () => {

//     const [Qimages, setQImages] = useState([]);
//     const [OPTimages, setOPTImages] = useState([]);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

//     useEffect(() => {
//         // Fetch data for Qimages (first image from each set of IDs 1-6, 7-12, ...)
//         const fetchQImages = async () => {
//             let fetchedQImages = [];

//             for (let i = 1; i <= 1000; i += 6) { // Assuming there are 100 sets of images
//                 try {
//                     const response = await fetch(`http://localhost:7001/images/${i}`);
//                     const data = await response.json();
//                     if (data.length > 0) {
//                         fetchedQImages.push(data[0]); // Add only the first image from each set
//                     }
//                 } catch (error) {
//                     console.error('Error fetching Qimages:', error);
//                 }
//             }

//             setQImages(fetchedQImages);
//         };

//         // Fetch data for OPTimages (images 2 to 5 from each set of IDs 1-6, 7-12, ...)
//         const fetchOPTImages = async () => {
//             let fetchedOPTImages = [];

//             for (let i = 1; i <= 1000; i += 6) { // Assuming there are 100 sets of images
//                 try {
//                     for (let j = i + 1; j <= i + 4; j++) {
//                         const response = await fetch(`http://localhost:7001/images/${j}`);
//                         const data = await response.json();
//                         if (data.length > 0) {
//                             fetchedOPTImages.push(data[0]); // Add the second to fifth images from each set
//                         }
//                     }
//                 } catch (error) {
//                     console.error('Error fetching OPTimages:', error);
//                 }
//             }

//             setOPTImages(fetchedOPTImages);
//         };

//         fetchQImages();
//         fetchOPTImages();
//     }, []); // Empty dependency array to fetch data only once when the component mounts

//     const handleNextClick = () => {
//         // Move to the next question when the "Next" button is clicked
//         setCurrentQuestionIndex(prevIndex => prevIndex + 1);
//     };

//     // Check if Qimages[currentQuestionIndex] is defined before accessing its properties
//     const currentQuestion = Qimages[currentQuestionIndex];
//     const questionImageSrc = currentQuestion ? `data:image/png;base64,${currentQuestion.image_data}` : '';

//     return (
//         <div className='main'>
//             <div className='sub-main'>
//                 <div><PaperHeader /></div>
//                 <div className="quiz-container">
//                     <div className='options-container'>
//                         <h2 className='question'>
//                             {currentQuestion ? (
//                                 <img
//                                     src={questionImageSrc}
//                                     alt={`QImage ${currentQuestionIndex + 1}`}
//                                 />
//                             ) : (
//                                 <p>Loading question...</p>

//                             // <Waveform
//                             //     size={40}
//                             //     lineWeight={3.5}
//                             //     speed={1}
//                             //     color="black"
//                             // />
//                             )}
//                         </h2>
//                         <ul className='options-container'>
//                             {/* ... (options rendering logic) */}
//                             {OPTimages
//                                 .slice(currentQuestionIndex * 4, currentQuestionIndex * 4 + 4)
//                                 .map((optImage, optIndex) => (

//                                     <li key={optIndex}>
//                                         <input type="radio" />
//                                         <label className='alpha-index'>
//                                             <img
//                                                 src={`data:image/png;base64,${optImage.image_data}`}
//                                                 alt={`OPTImage ${optIndex + 2}-${optIndex + 5}`}
//                                             />
//                                         </label>
//                                     </li>
//                                 ))}
//                         </ul>
//                         <button onClick={handleNextClick}>Next</button>
//                     </div>

//                 </div>
//             </div>

//             {/* ... */}
//         </div>
//     );
// };

// export default Paper;

// import React, { useEffect, useState } from 'react';
// import './Paper.css';
// import PaperHeader from '../../Components/PaperHeader/PaperHeader';

// import RightSidebar from '../../Components/RightSidebar/RightSidebar';
// import { DotSpinner } from '@uiball/loaders'

// const Paper = () => {

//     const [Qimages, setQImages] = useState([]);
//     const [OPTimages, setOPTImages] = useState([]);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

//     useEffect(() => {
//         // Fetch data for Qimages (first image from each set of IDs 1-6, 7-12, ...)
//         const fetchQImages = async () => {
//             let fetchedQImages = [];

//             for (let i = 1; i <= 1000; i += 6) { // Assuming there are 100 sets of images
//                 try {
//                     const response = await fetch(`http://localhost:7002/images/${i}`);
//                     const data = await response.json();
//                     if (data.length > 0) {
//                         fetchedQImages.push(data[0]); // Add only the first image from each set
//                     }
//                 } catch (error) {
//                     console.error('Error fetching Qimages:', error);
//                 }
//             }

//             setQImages(fetchedQImages);
//         };

//         // Fetch data for OPTimages (images 2 to 5 from each set of IDs 1-6, 7-12, ...)
//         const fetchOPTImages = async () => {
//             let fetchedOPTImages = [];

//             for (let i = 1; i <= 1000; i += 6) { // Assuming there are 100 sets of images
//                 try {
//                     for (let j = i + 1; j <= i + 4; j++) {
//                         const response = await fetch(`http://localhost:7002/images/${j}`);
//                         const data = await response.json();
//                         if (data.length > 0) {
//                             fetchedOPTImages.push(data[0]); // Add the second to fifth images from each set
//                         }
//                     }
//                 } catch (error) {
//                     console.error('Error fetching OPTimages:', error);
//                 }
//             }

//             setOPTImages(fetchedOPTImages);
//         };

//         fetchQImages();
//         fetchOPTImages();
//     }, []); // Empty dependency array to fetch data only once when the component mounts

//     // const handleNextClick = () => {
//     //     // Move to the next question when the "Next" button is clicked
//     //     setCurrentQuestionIndex(prevIndex => prevIndex + 1);

//     // };

//     // const handlepreClick=()=>{
//     //     setCurrentQuestionIndex(prevIndex => prevIndex - 1);
//     //     // setTimer(timer)

//     // }

// // Check if Qimages[currentQuestionIndex] is defined before accessing its properties
// const currentQuestion = Qimages[currentQuestionIndex];
// const questionImageSrc = currentQuestion ? `data:image/png;base64,${currentQuestion.image_data}` : '';

// const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)

//     return (
//         <div className='main'>
//             <div className='sub-main'>
//                 <div><PaperHeader /></div>
//                 <div className="quiz-container">
//                     <div>
//                         <div className='subjects'>
//                             <button className='subject-btn'>Mathematics</button>
//                             <button className='subject-btn'>Physics</button>
//                             <button className='subject-btn'>Chemistry</button>

//                         </div>
//                         <div className='second-header'>
//                             <div className='single-select-question'>
//                                 Single Select Question
//                             </div>
//                             <div className='right-header'>
//                                 <div className='marks'>
//                                     Marks: <div className='plus-mark'>+1</div>
//                                     <div className='minus-mark'>-1</div>
//                                 </div>
//                                 {/* <div className='timer'>
//                                     <h3>Time Left: {formatTime(countdown)}</h3>
//                                 </div> */}
//                             </div>
//                         </div>
//                         <div className='question-no'>
//                             <span className="active-question-no">Question No. {addLeadingZero(currentQuestionIndex + 1)}</span>
//                             <span className="total-question"> of {addLeadingZero(Qimages.length)}</span>
//                         </div>

//                         <div className='options-container'>

//                             <h2 className='question'>
//                                 {currentQuestion ? (
//                                  <div>
//                                         <img
//                                             src={questionImageSrc}
//                                             alt={`QImage ${currentQuestionIndex + 1}`}
//                                         />
//                                         <ul className='options-container'>
//                                             {/* ... (options rendering logic) */}
//                                             {OPTimages
//                                                 .slice(currentQuestionIndex * 4, currentQuestionIndex * 4 + 4)
//                                                 .map((optImage, optIndex) => (

//                                                     <li key={optImage}>
//                                                         <input
//                                                         name='index'
//                                                             type="radio"
//                                                           />
//                                                         <label className='alpha-index'>
//                                                             <img
//                                                                 src={`data:image/png;base64,${optImage.image_data}`}
//                                                                 alt={`OPTImage ${optIndex + 2}-${optIndex + 5}`}
//                                                             />
//                                                         </label>
//                                                     </li>
//                                                 ))}
//                                         </ul>
//                                  </div>
//                                 ) : (
//                                     // <p>Loading question...</p>

//                                  <div className='loading-gif'>
//                                             <DotSpinner
//                                                 size={90}
//                                                 speed={0.9}
//                                                 color="black"

//                                             />
//                                  </div>
//                                 )}

//                             </h2>
//                             {/* <ul className='options-container'>
//                                 ... (options rendering logic)
//                                 {OPTimages
//                                     .slice(currentQuestionIndex * 4, currentQuestionIndex * 4 + 4)
//                                     .map((optImage, optIndex) => (

//                                         <li key={optIndex}>
//                                             <input type="radio" />
//                                             <label className='alpha-index'>
//                                                 <img
//                                                     src={`data:image/png;base64,${optImage.image_data}`}
//                                                     alt={`OPTImage ${optIndex + 2}-${optIndex + 5}`}
//                                                 />
//                                             </label>
//                                         </li>
//                                     ))}
//                             </ul> */}
//                             {/* <button onClick={handleNextClick}>Next</button> */}
//                         </div>
//                         {/* a */}

//                         <div className="flex-right">
//                             {/* <button className='clear-btn'>Mark for Review & Next</button>
//                             <button className='clear-btn' onClick={clearResponse}>Clear Response</button>
//                             <button className='previous-btn' onClick={goToPreviousQuestion} disabled={activeQuestion === 0}>
//                                 <i class="fa-solid fa-angles-left"></i>
//                                 Previous
//                             </button>
//                             <button className='save-btn' onClick={onClickNext} disabled={!selectedAnswers[activeQuestion]}>
//                                 {activeQuestion === questions.length - 1 ? 'Submit' : 'Save & Next'}<i class="fa-solid fa-angles-right"></i>
//                             </button> */}
// {/*
//                             <button onClick={handlepreClick}>Previous</button>

//                             <button onClick={handleNextClick}>Save&Next</button> */}

//                         </div>
//                     </div>

//                 </div>
//             </div>

//             <div className='rightsidebar'><RightSidebar /></div>
//             {/* onQuestionSelect={handleQuestionSelect} answeredQuestions={answeredQuestions} */}

//         </div>
//     );
// };

// export default Paper;

// import React, { useEffect, useState } from 'react';
// import './Paper.css';
// import PaperHeader from '../../Components/PaperHeader/PaperHeader';
// import RightSidebar from '../../Components/RightSidebar/RightSidebar';
// import { DotSpinner } from '@uiball/loaders';

// const Paper = () => {
//     const [Qimages, setQImages] = useState([]);
//     const [OPTimages, setOPTImages] = useState([]);
//     const [activeQuestion, setActiveQuestion] = useState(0);
//     const [selectedAnswers, setSelectedAnswers] = useState(Array(Qimages.length).fill(''));
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [showResult, setShowResult] = useState(false);
//     const [result, setResult] = useState({
//         score: 0,
//         correctAnswers: 0,
//         wrongAnswers: 0,
//     });
//     const [timers, setTimers] = useState(new Array(Qimages.length).fill(0));
//     const [timer, setTimer] = useState(0);

//     useEffect(() => {
//             // Fetch data for Qimages (first image from each set of IDs 1-6, 7-12, ...)
//             const fetchQImages = async () => {
//                 let fetchedQImages = [];

//                 for (let i = 1; i <= 1000; i += 6) { // Assuming there are 100 sets of images
//                     try {
//                         const response = await fetch(`http://localhost:7002/images/${i}`);
//                         const data = await response.json();
//                         if (data.length > 0) {
//                             fetchedQImages.push(data[0]); // Add only the first image from each set
//                         }
//                     } catch (error) {
//                         console.error('Error fetching Qimages:', error);
//                     }
//                 }

//                 setQImages(fetchedQImages);
//             };

//             // Fetch data for OPTimages (images 2 to 5 from each set of IDs 1-6, 7-12, ...)
//             const fetchOPTImages = async () => {
//                 let fetchedOPTImages = [];

//                 for (let i = 1; i <= 1000; i += 6) { // Assuming there are 100 sets of images
//                     try {
//                         for (let j = i + 1; j <= i + 4; j++) {
//                             const response = await fetch(`http://localhost:7002/images/${j}`);
//                             const data = await response.json();
//                             if (data.length > 0) {
//                                 fetchedOPTImages.push(data[0]); // Add the second to fifth images from each set
//                             }
//                         }
//                     } catch (error) {
//                         console.error('Error fetching OPTimages:', error);
//                     }
//                 }

//                 setOPTImages(fetchedOPTImages);
//             };

//             fetchQImages();
//             fetchOPTImages();
//         }, []); // Empty dependency array to fetch data only once when the component mounts

//     const onAnswerSelected = (OptionLetter) => {
//         const updatedSelectedAnswers = [...selectedAnswers];
//         updatedSelectedAnswers[activeQuestion] = OptionLetter;
//         setSelectedAnswers(updatedSelectedAnswers);
//     };

//     const clearResponse = () => {
//         const updatedSelectedAnswers = [...selectedAnswers];
//         updatedSelectedAnswers[activeQuestion] = '';
//         setSelectedAnswers(updatedSelectedAnswers);
//     };

//     const goToPreviousQuestion = () => {
//         setCurrentQuestionIndex(prevIndex => {

//             // Save the current timer value for the question

//             const updatedTimers = [...timers];

//             updatedTimers[prevIndex] = timer;

//             setTimers(updatedTimers);

//             // Move to the previous question

//             return prevIndex - 1;

//         });
//         if (activeQuestion > 0) {
//             setActiveQuestion(activeQuestion - 1);
//         }
//     };

//     const onClickNext = () => {
//         setCurrentQuestionIndex(prevIndex => {

//             // Save the current timer value for the question

//             const updatedTimers = [...timers];

//             updatedTimers[prevIndex] = timer;

//             setTimers(updatedTimers);

//             // Move to the next question

//             return prevIndex + 1;

//         });
//         const correctAnswer = Qimages[activeQuestion].correct_answer; // Replace 'correct_answer' with the actual property name
//         const selectedAnswer = selectedAnswers[activeQuestion];

//         if (selectedAnswer === correctAnswer) {
//             setResult(prevResult => ({
//                 ...prevResult,
//                 score: prevResult.score + 5,
//                 correctAnswers: prevResult.correctAnswers + 1
//             }));
//         } else {
//             setResult(prevResult => ({
//                 ...prevResult,
//                 wrongAnswers: prevResult.wrongAnswers + 1
//             }));
//         }

//         if (activeQuestion < Qimages.length - 1) {
//             setActiveQuestion(prevActiveQuestion => prevActiveQuestion + 1);
//         } else {
//             setShowResult(true);
//             calculateResult(); // Implement this function for additional result calculations
//         }
//     };

//     const formatTime = (seconds) => {

//         const hours = Math.floor(seconds / 3600);

//         const minutes = Math.floor((seconds % 3600) / 60);

//         const remainingSeconds = seconds % 60;

//         return `${hours > 9 ? hours : '0' + hours}:${minutes > 9 ? minutes : '0' + minutes}:${remainingSeconds > 9 ? remainingSeconds : '0' + remainingSeconds}`;

//     };

//     // Check if Qimages[currentQuestionIndex] is defined before accessing its properties
//     const currentQuestion = Qimages[currentQuestionIndex];
//     const questionImageSrc = currentQuestion ? `data:image/png;base64,${currentQuestion.image_data}` : '';
//     const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)

//     const calculateResult = () => {
//         // Implement additional result calculations here if needed
//         // Example: Accuracy, Average Score, Top Score, Live Rank, etc.
//     };

//     return (
//         <div className='main'>

//             <div className='sub-main'>

//                 <div><PaperHeader /></div>
//                 <div className="quiz-container">
//                     <div>
//                         <div className='subjects'>
//                             <button className='subject-btn'>Mathematics</button>
//                             <button className='subject-btn'>Physics</button>
//                             <button className='subject-btn'>Chemistry</button>

//                         </div>
//                         <div className='second-header'>
//                             <div className='single-select-question'>
//                                 Single Select Question
//                             </div>
//                             <div className='right-header'>
//                                 <div className='marks'>
//                                     Marks: <div className='plus-mark'>+1</div>
//                                     <div className='minus-mark'>-1</div>
//                                 </div>
//                                 <div>Timer: {formatTime(timer)}</div>
//                             </div>
//                         </div>
//                         <div className='question-no'>
//                             <span className="active-question-no">Question No. {addLeadingZero(currentQuestionIndex + 1)}</span>
//                             <span className="total-question"> of {addLeadingZero(Qimages.length)}</span>
//                         </div>

//                         <div className='options-container'>

//                             <h2 className='question'>
//                                 {Qimages && Qimages.length > 0 && Qimages[activeQuestion] ? (

//                                     <div>
//                                         <img src={`data:image/png;base64,${Qimages[activeQuestion].image_data}`} alt={`QImage ${activeQuestion + 1}`} />
//                                         <ul className='options-container'>
//                                             {OPTimages.slice(activeQuestion * 4, activeQuestion * 4 + 4).map((optImage, optIndex) => (
//                                                 <li key={optIndex}>
//                                                     <input
//                                                         type='radio'
//                                                         name='index'
//                                                         checked={selectedAnswers[activeQuestion] === String.fromCharCode(65 + optIndex)}
//                                                         onChange={() => onAnswerSelected(String.fromCharCode(65 + optIndex))}
//                                                     />
//                                                     <label className='alpha-index'>
//                                                         <img
//                                                             src={`data:image/png;base64,${optImage.image_data}`}
//                                                             alt={`OPTImage ${optIndex + 2}-${optIndex + 5}`}
//                                                         />
//                                                     </label>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>

//                                 ) : (

//                                     <div className='loading-gif'>
//                                         <DotSpinner
//                                             size={90}
//                                             speed={0.9}
//                                             color="black"
//                                         />
//                                     </div>
//                                 )}
//                             </h2>

//                         </div>

//                         <div className="flex-right">

//                         </div>
//                     </div>

//                 </div>

//                 <div className='flex-right'>
//                     <button className='clear-btn'>Mark for Review & Next</button>
//                     <button className='clear-btn' onClick={clearResponse}>
//                         Clear Response
//                     </button>
//                     <button className='previous-btn'  onClick={goToPreviousQuestion} disabled={activeQuestion === 0}>
//                         <i className='fa-solid fa-angles-left'></i> Previous
//                     </button>
//                     <button className='save-btn' onClick={onClickNext} disabled={!selectedAnswers[activeQuestion]}>
//                         {activeQuestion === Qimages.length - 1 ? 'Submit' : 'Save & Next'}
//                         <i className='fa-solid fa-angles-right'></i>
//                     </button>
//                 </div>
//             </div>
//             <div className='rightsidebar'>
//                 <RightSidebar />
//             </div>
//         </div>
//     );
// };

// export default Paper;

import React, { useEffect, useState, useRef } from "react";
import "./Paper.css";
import PaperHeader from "../../Components/PaperHeader/PaperHeader";
import RightSidebar from "../../Components/RightSidebar/RightSidebar";
// import "../../Components/RightSidebar/RightSidebar.css";
import { DotSpinner } from "@uiball/loaders";

const Paper = ({ onQuestionSelect, questionStatus, seconds1 }) => {
  const [Qimages, setQImages] = useState([]);
  const [OPTimages, setOPTImages] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(Qimages.length).fill("")
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  useEffect(() => {
    // Fetch data for Qimages (first image from each set of IDs 1-6, 7-12, ...)
    const fetchQImages = async () => {
      let fetchedQImages = [];

      for (let i = 1; i <= 1000; i += 6) {
        // Assuming there are 100 sets of images
        try {
          const response = await fetch(`http://localhost:7002/images/${i}`);
          const data = await response.json();
          if (data.length > 0) {
            fetchedQImages.push(data[0]); // Add only the first image from each set
          }
        } catch (error) {
          console.error("Error fetching Qimages:", error);
        }
      }

      setQImages(fetchedQImages);
    };

    // Fetch data for OPTimages (images 2 to 5 from each set of IDs 1-6, 7-12, ...)
    const fetchOPTImages = async () => {
      let fetchedOPTImages = [];

      for (let i = 1; i <= 1000; i += 6) {
        // Assuming there are 100 sets of images
        try {
          for (let j = i + 1; j <= i + 4; j++) {
            const response = await fetch(`http://localhost:7002/images/${j}`);
            const data = await response.json();
            if (data.length > 0) {
              fetchedOPTImages.push(data[0]); // Add the second to fifth images from each set
            }
          }
        } catch (error) {
          console.error("Error fetching OPTimages:", error);
        }
      }

      setOPTImages(fetchedOPTImages);
    };

    fetchQImages();
    fetchOPTImages();
  }, []); // Empty dependency array to fetch data only once when the component mounts

  const [timers, setTimers] = useState(new Array(Qimages.length).fill(0));
  const [timer, setTimer] = useState(0);

  const onAnswerSelected = (OptionLetter) => {
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[activeQuestion] = OptionLetter;
    setSelectedAnswers(updatedSelectedAnswers);
  };

  const clearResponse = () => {
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[activeQuestion] = "";
    setSelectedAnswers(updatedSelectedAnswers);
  };

  const goToPreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => {
      // Save the current timer value for the question

      const updatedTimers = [...timers];

      updatedTimers[prevIndex] = timer;

      setTimers(updatedTimers);

      // Move to the previous question

      return prevIndex - 1;
    });
    if (activeQuestion > 0) {
      setActiveQuestion(activeQuestion - 1);
    }
  };

  const onClickNext = () => {
    setCurrentQuestionIndex((prevIndex) => {
      // Save the current timer value for the question

      const updatedTimers = [...timers];

      updatedTimers[prevIndex] = timer;

      setTimers(updatedTimers);

      // Move to the next question

      return prevIndex + 1;
    });
    const correctAnswer = Qimages[activeQuestion].correct_answer; // Replace 'correct_answer' with the actual property name
    const selectedAnswer = selectedAnswers[activeQuestion];

    if (selectedAnswer === correctAnswer) {
      setResult((prevResult) => ({
        ...prevResult,
        score: prevResult.score + 5,
        correctAnswers: prevResult.correctAnswers + 1,
      }));
    } else {
      setResult((prevResult) => ({
        ...prevResult,
        wrongAnswers: prevResult.wrongAnswers + 1,
      }));
    }

    if (activeQuestion < Qimages.length - 1) {
      setActiveQuestion((prevActiveQuestion) => prevActiveQuestion + 1);
    } else {
      setShowResult(true);
      calculateResult(); // Implement this function for additional result calculations
    }
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);

    const minutes = Math.floor((seconds % 3600) / 60);

    const remainingSeconds = seconds % 60;

    return `${hours > 9 ? hours : "0" + hours}:${
      minutes > 9 ? minutes : "0" + minutes
    }:${remainingSeconds > 9 ? remainingSeconds : "0" + remainingSeconds}`;
  };

  useEffect(() => {
    // Set the timer to the saved value for the current question

    setTimer(timers[currentQuestionIndex] || 0);

    let interval;

    interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    // Clear the interval when the component unmounts or when the user moves to the next question

    return () => {
      clearInterval(interval);
    };
  }, [currentQuestionIndex, timers]);

  // Check if Qimages[currentQuestionIndex] is defined before accessing its properties
  const currentQuestion = Qimages[currentQuestionIndex];
  const questionImageSrc = currentQuestion
    ? `data:image/png;base64,${currentQuestion.image_data}`
    : "";
  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  const calculateResult = () => {
    // Implement additional result calculations here if needed
    // Example: Accuracy, Average Score, Top Score, Live Rank, etc.
  };




  // Timer for whole page

//   const totalTime = 180 * 60; // 180 minutes in seconds
//   const [wtimer, setWTimer] = useState(totalTime);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setWTimer((prevTimer) => prevTimer - 1);
//     }, 1000);

//     // Clear the interval and handle time-up logic when timer reaches 0
//     if (timer <= 0) {
//       clearInterval(interval);
//       // Handle time-up logic here (e.g., navigate to a different component)
//     }

//     // Clean up the interval on component unmount or when navigating away
//     return () => {
//       clearInterval(interval);
//     };
//   }, [timer]);

//   const WformatTime = (seconds) => {
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
//     const remainingSeconds = seconds % 60;
//     return `${hours > 9 ? hours : '0' + hours}:${minutes > 9 ? minutes : '0' + minutes}:${remainingSeconds > 9 ? remainingSeconds : '0' + remainingSeconds}`;
//   };








  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const handleButtonClick = (questionNumber) => {
    onQuestionSelect(questionNumber);
    setAnsweredQuestions([...answeredQuestions, questionNumber]);
  };

  const buttons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];
  const renderList = buttons.map((item, index) => {
    let className = "quesAns-btn";
    if (questionStatus && questionStatus[index] === "answered") {
      className += "answered";
    }
    return (
      <div>
        <button className={className} onClick={() => handleButtonClick(item)}>
          {item}
        </button>
      </div>
    );
  });

  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <PaperHeader />
        </div>
        <div className="quiz-container">
          <div>
            <div className="subjects">
              <button className="subject-btn">Mathematics</button>
              <button className="subject-btn">Physics</button>
              <button className="subject-btn">Chemistry</button>
            </div>
            <div className="second-header">
              <div className="single-select-question">
                Single Select Question
              </div>
              <div className="right-header">
                <div className="marks">
                  Marks: <div className="plus-mark">+1</div>
                  <div className="minus-mark">-1</div>
                </div>
                <div>Timer: {formatTime(timer)}</div>
              </div>
            </div>
            <div className="question-no">
              <span className="active-question-no">
                Question No. {addLeadingZero(currentQuestionIndex + 1)}
              </span>
              <span className="total-question">
                {" "}
                of {addLeadingZero(Qimages.length)}
              </span>
            </div>

            <div className="options-container">
              <h2 className="question">
                {Qimages && Qimages.length > 0 && Qimages[activeQuestion] ? (
                  <div>
                    <img
                      src={`data:image/png;base64,${Qimages[activeQuestion].image_data}`}
                      alt={`QImage ${activeQuestion + 1}`}
                    />
                    <ul className="options-container">
                      {OPTimages.slice(
                        activeQuestion * 4,
                        activeQuestion * 4 + 4
                      ).map((optImage, optIndex) => (
                        <li key={optIndex}>
                          <input
                            type="radio"
                            name="index"
                            checked={
                              selectedAnswers[activeQuestion] ===
                              String.fromCharCode(65 + optIndex)
                            }
                            onChange={() =>
                              onAnswerSelected(
                                String.fromCharCode(65 + optIndex)
                              )
                            }
                          />
                          <label className="alpha-index">
                            <img
                              src={`data:image/png;base64,${optImage.image_data}`}
                              alt={`OPTImage ${optIndex + 2}-${optIndex + 5}`}
                            />
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="loading-gif">
                    <DotSpinner size={90} speed={0.9} color="black" />
                  </div>
                )}
              </h2>
            </div>

            <div className="flex-right"></div>
          </div>
        </div>

        <div className="flex-right">
          <button className="clear-btn">Mark for Review & Next</button>
          <button className="clear-btn" onClick={clearResponse}>
            Clear Response
          </button>
          <button
            className="previous-btn"
            onClick={goToPreviousQuestion}
            disabled={activeQuestion === 0}
          >
            <i className="fa-solid fa-angles-left"></i> Previous
          </button>
          <button
            className="save-btn"
            onClick={onClickNext}
            disabled={!selectedAnswers[activeQuestion]}
          >
            {activeQuestion === Qimages.length - 1 ? "Submit" : "Save & Next"}
            <i className="fa-solid fa-angles-right"></i>
          </button>
        </div>
      </div>
      <div className="rightsidebar">
        <RightSidebar   />
       
      </div>
    </div>
  );
};

export default Paper;
