// import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";

// const Paper1 = () => {
//   // const { subi_id } = useParams();
//   //     const [quizData, setQuizData] = useState([]);

//   // console.log(quizData)
//   // useEffect(() => {
//   //   // Fetch data from the endpoint
//   //   fetch(`http://localhost:10000/quiz_all/`+subi_id)

//   //     .then((response) => response.json())
//   //     .then((data) => setQuizData(data))
//   //     .catch((error) => console.error('Error fetching data:', error));
//   // }, [subi_id]);

//   const [subjectNames, setSubjectNames] = useState([]);

//   useEffect(() => {
//     fetch(`http://localhost:4009/quiz_all/1`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data); // Log the data received from the API
//         setSubjectNames(data);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   // const [answer, setAnswer] = useState([]);
//   // useEffect(() => {
//   //   // Fetch data from the endpoint
//   //   fetch(`http://localhost:4009/answers/`)
//   //     .then((response) => response.json())
//   //     .then((data) => setAnswer(data))
//   //     .catch((error) => console.error("Error fetching data:", error));
//   // }, []);

//   return (
//     <div>
//       <h1>hii</h1>

//       <div>
//         {Array.isArray(subjectNames) && subjectNames.length > 0 ? (
//           <div>
//             {subjectNames.map((subjects) => (
//               <li key={subjects.subi_id}>
//                 <p>{subjects.subject_name}</p>
//               </li>
//             ))}
//           </div>
//         ) : (
//           <p>No subjects available.</p>
//         )}
//         {/* <ul>
//            {subjectNames.map((item) => (
//           <li key={item.subi_id}>
//             <p>{item.subject_name}</p>
//           </li>
//         ))}
//         </ul> */}

//         {/* <button>Mathematics</button>
//                 <button>Physics</button>
//                 <button>Chemistry</button> */}
//       </div>

//       {/* answers display */}
//       {/* <div>
//       {answer.map((ans) => (
//           <li key={ans.subi_id}>
//             <p>{ans.answer}</p>
//           </li>
//         ))}
//       </div> */}

//       {/* <h1>Quiz Questions</h1> */}
//       <div>
//         {/* {quizData.map((question) => (
//           <div key={question.question_id}>
//             <h3>Question {question.question_id}</h3>
//             <img
//               src={`data:image/png;base64,${question.question_img}`}
//               alt={`Question ${question.question_id}`}
//             />
//             <ul>
//               {question.options.map((option) => (
//                 <li key={option.option_id}>
//                   <img
//                     src={`data:image/png;base64,${option.option_img}`}
//                     alt={`Option ${option.option_id}`}
//                   />
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))} */}
//       </div>
//     </div>
//   );
// };

// export default Paper1;















import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PaperHeader from "../../Components/PaperHeader/PaperHeader";
import "./Paper.css";
const Paper1 = () => {
  const [questionData, setQuestionData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [Subjects, setSubjects] = useState([]);
  const { testCreationTableId, subjectId } = useParams();
  const [sections, setSections] = useState([]);

 
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await fetch(
          `http://localhost:4009/subjects/${testCreationTableId}`
        );
        const data = await response.json();
        setSubjects(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSubjects();
  }, [testCreationTableId]);



  useEffect(() => {
    const fetchSections = async () => {
      try {
        const response = await fetch(
          `http://localhost:4009/fetchSections/${testCreationTableId}`
        );
        const data = await response.json();
        setSections(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSections();
  }, [testCreationTableId]);

  
  useEffect(() => {
    const fetchQuestionData = async () => {
      try {
        const response = await fetch(
          `http://localhost:4009/getPaperData/${testCreationTableId}/${subjectId}`
        );
        const data = await response.json();
        setQuestionData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestionData();
  }, [testCreationTableId]);



  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questionData.length).fill("")
  );

  const handleNextClick = () => {
    // Update the current question index to move to the next question
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex < questionData.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const onAnswerSelected = (optionIndex) => {
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(updatedSelectedAnswers);
  };

  const [activeQuestion, setActiveQuestion] = useState(0);
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

    if (questionData > 0) {
      setActiveQuestion(questionData - 1);
    }
  };

  // ---------------------------------Timer code Start--------------------------------
  const [timer, setTimer] = useState(0);
  const [timers, setTimers] = useState(new Array(questionData.length).fill(0));

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
  // ------------------------------------Timer code end--------------------------------

  return (
    <div>
      <div>
        <PaperHeader />
      </div>
      <div className="subjects">
        {Subjects.map((subjectTitle, index) => (
          <li key={index}>
            <button className="subject-btn">{subjectTitle.subjectName}</button>
          </li>
        ))}
      </div>
      <div className="second-header">
        <div className="single-select-question">
          {sections.map((sectionTitle,index)=>(
            <li key={index}>
              <p>{sectionTitle.sectionName}</p>
            </li>
          ))}
          {/* Single Select Question */}
        </div>
        <div className="right-header">
          <div className="marks">
            Marks: <div className="plus-mark">+1</div>
            <div className="minus-mark">-1</div>
          </div>
          <div>Timer: {formatTime(timer)}</div>
        </div>
      </div>
      {questionData.length > 0 && (
        <div>
          <h4>
            {currentQuestionIndex + 1}.
            <img
              src={questionData[currentQuestionIndex].question_img}
              alt={`Question ${currentQuestionIndex + 1}`}
            />
          </h4>

          {questionData[currentQuestionIndex].optionImages.map(
            (OptionImage, optionIndex) => (
              <li key={optionIndex}>
                <input
                  type="radio"
                  name={`question-${currentQuestionIndex}-option`}
                  value={optionIndex}
                  checked={
                    selectedAnswers[currentQuestionIndex] === optionIndex
                  }
                  onChange={() => onAnswerSelected(optionIndex)}
                />
                <img
                  key={optionIndex}
                  src={OptionImage.option_img}
                  alt={`Option ${optionIndex + 1}`}
                />
              </li>
            )
          )}
          <div className="flex-right">
            <button className="clear-btn" onClick={clearResponse}>
              Clear Response
            </button>
            <button
              className="previous-btn"
              onClick={goToPreviousQuestion}
              disabled={questionData === 0}
            >
              <i className="fa-solid fa-angles-left"></i> Previous
            </button>
            <button className="save-btn" onClick={handleNextClick}>
              Next <i className="fa-solid fa-angles-right"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Paper1;


// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const Paper1 = () => {
//   const [sections, setSections] = useState([]);
//   const { testCreationTableId } = useParams();

//   useEffect(() => {
//     const fetchSections = async () => {
//       try {
//         const response = await fetch(`http://localhost:4009/quiz_all/${testCreationTableId}`);

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log('Received data:', data);
//         setSections(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchSections();
//   }, [testCreationTableId]); // Use testCreationTableId as a dependency to trigger fetch when it changes

//   return (
//     <div>
//       {Object.values(sections).map((section) => (
//         <div key={section.sectionId}>
//           <h2>{section.sectionName}</h2>
//           {section.questions.map((question) => (
//             <div key={question.qustion_id}>
//               {/* Display question image */}
//               <img src={`data:image/png;base64,${question.question_img}`} alt={`Question ${question.qustion_id}`} />

//               {/* Display option images */}
//               <ul>
//                 {question.option_img.map((option, index) => (
//                   <li key={index}>
//                     <img src={`data:image/png;base64,${option.option_img}`} alt={`Option ${option.Option_Index}`} />
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Paper1;