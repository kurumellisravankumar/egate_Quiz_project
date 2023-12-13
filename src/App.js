import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomeLandingPage from './Pages/HomeLandingPage/HomeLandingPage'

import QuizHome from './Pages/QuizHome/QuizHome'
import Paper1 from './Pages/Paper/Paper1'
// import Paper1 from './Pages/Paper/Paper1'
import SubjectTest from './Pages/SubjectTest/SubjectTest'
import FullTest from './Pages/FullTest/FullTest'
// import ChapterTest from './Pages/ChapterTest/ChapterTest'
// import PreviousTest from './Pages/PreviousTest/PreviousTest'
import Instructions from './Pages/Instructions/Instructions';
import General_intructions_page from './Pages/General_intructions_page/General_intructions_page'
import Payment from './Pages/Payment/Payment'
import DownloadQuizPage from './Pages/DownloadQuizPage/DownloadQuizPage'
import CoursePage from './Pages/HomeLandingPage/CoursePage'
import Document_ImageInfo from './Pages/Paper/Document_ImageInfo';
import QuestionsFunctionality from './Pages/MainQuizFunctionality/QuestionsFunctionality';
import TestResultsPage from './Pages/MainQuizFunctionality/TestResultsPage';





function App() {

  return (

    <BrowserRouter>
    {/* <Instructions/> */}
       <Routes>
        <Route path='/' element={<HomeLandingPage/>}/> 
        {/* <Route path='/CoursePage/:examId' element={<CoursePage/>} /> */}
        <Route path='/feachingcourse/:examId' element={<CoursePage/>} />
          <Route path='/QuizHome' element={<QuizHome/>}/>
        {/* <Route path='/Paper' element={<Paper />} /> */}
        <Route path='/getPaperData/:testCreationTableId'  element={<QuestionsFunctionality />} />
        <Route path='/result'  element={<TestResultsPage />} />
        {/* <Route path='/quiz_all/:testCreationTableId'  element={<Paper1 />} /> */}
        <Route path='/Payment'  element={<Payment />} />
        <Route path={'#'} element={<SubjectTest/>} />
        {/* <Route path='/FullTest/:courseCreationId' element={<FullTest />} /> */}
        <Route path='/Test_List/:courseCreationId' element={<FullTest />} />
        <Route path='/Instructions/:testCreationTableId' element={<Instructions />} />
        <Route path='/General_intructions_page/:testCreationTableId' element={<General_intructions_page/>}/>
        {/* <Route path='/DownloadQuizPage' element={<DownloadQuizPage/>} /> */}
        {/* <Route path='/Document_ImageInfo' element={<Document_ImageInfo/>} /> */}
       </Routes>
    </BrowserRouter>


  );
}






export default App;
