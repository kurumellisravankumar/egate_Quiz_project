// // const express = require('express');
// // const multer = require('multer');
// // const mysql = require('mysql2'); // Use mysql2 instead of mysql
// // const cors = require('cors');
// // const app = express();
// // const port = 4009;
// // const dbConfig = {
// //     host: 'localhost',
// //     user: 'root',
// //     password: '',
// //     database: 'egrad-quizdb',
// // };

// // const connection = mysql.createConnection(dbConfig);

// // connection.connect((err) => {
// //     if (err) {
// //         console.error('Error connecting to the database: ' + err.message);
// //         throw err;
// //     }
// //     console.log('Connected to the database');
// // });
// // app.use(cors());

// // //feaching coureses

// // app.get('/courses', (req, res) => {
// //     const query = 'SELECT course_name FROM 1egquiz_courses';
// //     connection.query(query, (error, results) => {
// //       if (error) {
// //         console.error('Error executing query: ' + error.stack);
// //         res.status(500).send('Error retrieving data from database.');
// //         return;
// //       }
// //       console.log('Retrieved data from test table:');
// //       console.log(results);
// //       // Send the retrieved data as JSON response
// //       res.json(results);
// //     });
// //   });

// //   app.get("/exams/:course_id", (req, res) => {
// //     const course_id = req.params.course_id;
// //     const sql = "SELECT exam_name FROM 2egquiz_exam WHERE course_id= ?";
// //     connection.query(sql, [course_id], (err, result) => {
// //       if (err) {
// //         console.error('Error querying the database: ' + err.message);
// //         res.status(500).json({ error: 'Error fetching exams' });
// //         return;
// //       }
// //       res.json(result);
// //     });
// //   });

// //   app.get("/test_paper/:exam_id",(req,res)=>{
// //   const sql="SELECT year,paper_name FROM test_paper WHERE exam_id= ?";
// //   const exam_id=req.params.exam_id;
// //   connection.query(sql, [exam_id] ,(err,result)=>{
// //     if(err){
// //       console.error('Error querying the database: ' + err.message);
// //      res.status(500).json({ error: 'Error fetching subjects' });
// //     return;
// //   }
// //   res.json(result);
// //   })
// //   });

// // app.get("/quiz_all/:test_paper_id", (req, res) => {
// //     const sql = "SELECT q.question_id,q.question_img,es.subi_id,es.subject_name,o.option_img,o.option_id FROM questions q,egquiz_subindex es,options o WHERE `test_paper_id` = ? AND q.subi_id=es.subi_id AND q.question_id=o.question_id;";
// //     const test_paper_id = req.params.test_paper_id;
// //     connection.query(sql, [test_paper_id], (err, results) => {
// //       if (err) {
// //         console.error('Error querying the database: ' + err.message);
// //         res.status(500).json({ error: 'Error fetching Exams_Id' });
// //         return;
// //       }

// //       const subjects = {};

// //       results.forEach((row) => {
// //         const { subi_id, subject_name, question_id, question_img,option_img } = row;

// //         if (!subjects[subject_name]) {
// //           subjects[subject_name] = {
// //             subi_id,
// //             subject_name,
// //             questions: [],
// //           };
// //         }

// //         const question = subjects[subject_name].questions.find(q => q.question_id === question_id);
// //         if (!question) {
// //           subjects[subject_name].questions.push({
// //             question_id,
// //             question_img,
// //             option_img: [],
// //           });
// //         }

// //         const option = {
// //           option_img,
// //         };

// //         subjects[subject_name].questions.find(q => q.question_id === question_id).option_img.push(option);
// //       });

// //       res.json(subjects);
// //     });
// //   });

// //   app.get('/answers', (req, res) => {
// //     const query = 'SELECT * FROM answer';
// //     connection.query(query, (error, results) => {
// //       if (error) {
// //         console.error('Error executing query: ' + error.stack);
// //         res.status(500).send('Error retrieving data from database.');
// //         return;
// //       }
// //       console.log('Retrieved data from test table:');
// //       console.log(results);
// //       // Send the retrieved data as JSON response
// //       res.json(results);
// //     });
// //   });

// //   app.listen(port, () => {
// //     console.log(`Server is running on http://localhost:${port}`);
// // });

// // ------------------------------------sravan HomeLandingPage----------------------------------

// // const express = require('express');
// // const multer = require('multer');
// // const mysql = require('mysql2'); // Use mysql2 instead of mysql
// // const cors = require('cors');
// // const app = express();
// // const port = 4009;
// // const dbConfig = {
// //     host: 'localhost',
// //     user: 'root',
// //     password: '',
// //     // database: 'egquizdatabase',//main
// //     // database: 'egrad-quizdb',
// //     database: 'quizadmindb',
// // };

// // const connection = mysql.createConnection(dbConfig);

// // connection.connect((err) => {
// //     if (err) {
// //         console.error('Error connecting to the database: ' + err.message);
// //         throw err;
// //     }
// //     console.log('Connected to the database');
// // });
// // app.use(cors());

// // //feaching coureses

// // app.get('/courses', (req, res) => {

// //     const query = 'SELECT course_name,course_id FROM 1egquiz_courses';
// //     connection.query(query, (error, results) => {
// //       if (error) {
// //         console.error('Error executing query: ' + error.stack);
// //         res.status(500).send('Error retrieving data from database.');
// //         return;
// //       }
// //       console.log('Retrieved data from test table:');
// //       console.log(results);
// //       // Send the retrieved data as JSON response
// //       res.json(results);
// //     });
// //   });

// //   app.get("/exams/:course_id", (req, res) => {
// //     const course_id = req.params.course_id;
// //     const sql = "SELECT exam_name FROM 2egquiz_exam WHERE course_id= ?";
// //     connection.query(sql, [course_id], (err, result) => {
// //       if (err) {
// //         console.error('Error querying the database: ' + err.message);
// //         res.status(500).json({ error: 'Error fetching exams' });
// //         return;
// //       }
// //       res.json(result);
// //     });
// //   });

// //   app.get("/examsug", (req, res) => {
// //     const course_id = req.params.course_id;
// //     // const sql = "SELECT exam_name FROM 2egquiz_exam WHERE exam_name=UG";
// //     const sql="SELECT exam_name FROM 2egquiz_exam WHERE course_id = ( SELECT Min(course_id)  FROM 2egquiz_exam  );"
// //     connection.query(sql, [course_id], (err, result) => {
// //       if (err) {
// //         console.error('Error querying the database: ' + err.message);
// //         res.status(500).json({ error: 'Error fetching exams' });
// //         return;
// //       }
// //       res.json(result);
// //     });
// //   });

// //   app.get("/examspg", (req, res) => {
// //     const course_id = req.params.course_id;
// //     // const sql = "SELECT exam_name FROM 2egquiz_exam WHERE exam_name=UG";
// //     const sql="SELECT exam_name FROM 2egquiz_exam WHERE course_id = ( SELECT Min(course_id+1)  FROM 2egquiz_exam  );"
// //     connection.query(sql, [course_id], (err, result) => {
// //       if (err) {
// //         console.error('Error querying the database: ' + err.message);
// //         res.status(500).json({ error: 'Error fetching exams' });
// //         return;
// //       }
// //       res.json(result);
// //     });
// //   });
// //   app.get("/examsmba", (req, res) => {
// //     const course_id = req.params.course_id;
// //     // const sql = "SELECT exam_name FROM 2egquiz_exam WHERE exam_name=UG";
// //     const sql="SELECT exam_name FROM 2egquiz_exam WHERE course_id = ( SELECT Min(course_id+2)  FROM 2egquiz_exam  );"
// //     connection.query(sql, [course_id], (err, result) => {
// //       if (err) {
// //         console.error('Error querying the database: ' + err.message);
// //         res.status(500).json({ error: 'Error fetching exams' });
// //         return;
// //       }
// //       res.json(result);
// //     });
// //   });
// //   app.get("/examsca", (req, res) => {
// //     const course_id = req.params.course_id;
// //     // const sql = "SELECT exam_name FROM 2egquiz_exam WHERE exam_name=UG";
// //     const sql="SELECT exam_name FROM 2egquiz_exam WHERE course_id = ( SELECT Min(course_id+3)  FROM 2egquiz_exam  );"
// //     connection.query(sql, [course_id], (err, result) => {
// //       if (err) {
// //         console.error('Error querying the database: ' + err.message);
// //         res.status(500).json({ error: 'Error fetching exams' });
// //         return;
// //       }
// //       res.json(result);
// //     });
// //   });

// //   app.get('/coursesug', (req, res) => {

// //     // const query = 'SELECT course_name,course_id FROM 1egquiz_courses';
// //     const query="SELECT course_name FROM 1egquiz_courses WHERE course_id = ( SELECT Min(course_id)  FROM 1egquiz_courses  );"

// //     connection.query(query, (error, results) => {
// //       if (error) {
// //         console.error('Error executing query: ' + error.stack);
// //         res.status(500).send('Error retrieving data from database.');
// //         return;
// //       }
// //       console.log('Retrieved data from test table:');
// //       console.log(results);
// //       // Send the retrieved data as JSON response
// //       res.json(results);
// //     });
// //   });

// //   app.get('/coursespg', (req, res) => {

// //     // const query = 'SELECT course_name,course_id FROM 1egquiz_courses';
// //     const query="SELECT course_name FROM 1egquiz_courses WHERE course_id = ( SELECT Min(course_id+1)  FROM 1egquiz_courses  );"

// //     connection.query(query, (error, results) => {
// //       if (error) {
// //         console.error('Error executing query: ' + error.stack);
// //         res.status(500).send('Error retrieving data from database.');
// //         return;
// //       }
// //       console.log('Retrieved data from test table:');
// //       console.log(results);
// //       // Send the retrieved data as JSON response
// //       res.json(results);
// //     });
// //   });

// //   app.get('/coursesmba', (req, res) => {

// //     // const query = 'SELECT course_name,course_id FROM 1egquiz_courses';
// //     const query="SELECT course_name FROM 1egquiz_courses WHERE course_id = ( SELECT max(course_id-1)  FROM 1egquiz_courses  );"

// //     connection.query(query, (error, results) => {
// //       if (error) {
// //         console.error('Error executing query: ' + error.stack);
// //         res.status(500).send('Error retrieving data from database.');
// //         return;
// //       }
// //       console.log('Retrieved data from test table:');
// //       console.log(results);
// //       // Send the retrieved data as JSON response
// //       res.json(results);
// //     });
// //   });

// //   app.get('/coursesca', (req, res) => {

// //     const query = 'SELECT course_name,course_id FROM 1egquiz_courses';
// //     // const query="SELECT course_name FROM 1egquiz_courses WHERE course_id = ( SELECT max(course_id)  FROM 1egquiz_courses  );"

// //     connection.query(query, (error, results) => {
// //       if (error) {
// //         console.error('Error executing query: ' + error.stack);
// //         res.status(500).send('Error retrieving data from database.');
// //         return;
// //       }
// //       console.log('Retrieved data from test table:');
// //       console.log(results);
// //       // Send the retrieved data as JSON response
// //       res.json(results);
// //     });
// //   });

// //   app.get("/test_paper/:exam_id",(req,res)=>{
// //   const sql="SELECT year,paper_name FROM test_paper WHERE exam_id= ?";
// //   const exam_id=req.params.exam_id;
// //   connection.query(sql, [exam_id] ,(err,result)=>{
// //     if(err){
// //       console.error('Error querying the database: ' + err.message);
// //      res.status(500).json({ error: 'Error fetching subjects' });
// //     return;
// //   }
// //   res.json(result);
// //   })
// //   });

// // //updated version
// // // app.get("/quiz_all/:test_paper_id", (req, res) => {
// // //     const sql = "SELECT q.question_id,q.question_img,es.subi_id,es.subject_name,o.option_img,o.option_id FROM questions q,egquiz_subindex es,options o WHERE `test_paper_id` = ? AND q.subi_id=es.subi_id AND q.question_id=o.question_id;";
// // //     const test_paper_id = req.params.test_paper_id;
// // //     connection.query(sql, [test_paper_id], (err, results) => {
// // //       if (err) {
// // //         console.error('Error querying the database: ' + err.message);
// // //         res.status(500).json({ error: 'Error fetching Exams_Id' });
// // //         return;
// // //       }

// // //       const subjects = {};

// // //       results.forEach((row) => {
// // //         const { subi_id, subject_name, question_id, question_img,option_img } = row;

// // //         if (!subjects[subject_name]) {
// // //           subjects[subject_name] = {
// // //             subi_id,
// // //             subject_name,
// // //             questions: [],
// // //           };
// // //         }

// // //         const question = subjects[subject_name].questions.find(q => q.question_id === question_id);
// // //         if (!question) {
// // //           subjects[subject_name].questions.push({
// // //             question_id,
// // //             question_img,
// // //             option_img: [],
// // //           });
// // //         }

// // //         const option = {
// // //           option_img,
// // //         };

// // //         subjects[subject_name].questions.find(q => q.question_id === question_id).option_img.push(option);
// // //       });

// // //       res.json(subjects);
// // //     });
// // //   });

// //  //old version
// // app.get('/images/:id', (req, res) => {
// //     const id = req.params.id; // Use req.params.id to get the ID from the route

// //     // Query the database to fetch images for the specified document_id
// //     const selectImagesSql = 'SELECT image_data FROM images WHERE id = ?'; // Change "id" to "document_id"
// //     connection.query(selectImagesSql, [id], (error, results) => {
// //         if (error) {
// //             console.error(error);
// //             res.status(500).send('Error fetching images from the database.');
// //         } else {
// //             // Send the images as a JSON response
// //             const images = results.map(result => {
// //                 return {
// //                     image_name: result.image_name,
// //                     image_data: result.image_data.toString('base64'),
// //                 };
// //             });
// //             res.json(images);
// //         }
// //     });
// // });

// // // ---------------------------------------------h------------------------------------------------
// // // app.get('/examcards/:examId', (req, res) => {

// // //   const query = 'SELECT examName, endDate FROM exams WHERE examId=?';

// // //   const examId = req.params.examId;
// // //   connection.query(query,[examId], (error, results) => {
// // //     if (error) {
// // //       console.error('Error executing query: ' + error.stack);
// // //       res.status(500).send('Error retrieving data from database.');
// // //       return;
// // //     }

// // //     console.log(results);
// // //     // Send the retrieved data as JSON response
// // //     res.json(results);
// // //   });
// // // });

// //   app.listen(port, () => {
// //     console.log(`Server is running on http://localhost:${port}`);
// // });

// // --------------------------------------end s code--------------------------------------------------------

// // -------------------------------------------------start h code------------------------------------------------------------------
// const express = require("express");
// const mysql = require("mysql2/promise");
// const cors = require("cors");
// const app = express();
// const port = 4009;

// app.use(express.json());
// app.use(cors());
// const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "admin_project",
// });

// app.get("/examData", async (req, res) => {
//   // FetchData
//   try {
//     const [rows] = await db.query("SELECT * FROM exams");
//     res.json(rows);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // app.get("/feachingcourse/:examId", async (req, res) => {
// //   const { examId } = req.params.examId;
// //   try {
// //     // Fetch exams from the database
// //     const [rows] = await db.query(
// //       "SELECT * FROM course_creation_table WHERE examId = ?",
// //       [examId]
// //     );

// //     res.json(rows);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: "Internal Server Error" });
// //   }
// // });

// app.get("/feachingcourse/:examId", async (req, res) => {
//   const { examId } = req.params; // Remove ".examId" here
//   try {
//     // Fetch exams from the database
//     const [rows] = await db.query(
//       "SELECT * FROM course_creation_table WHERE examId = ?",
//       [examId]
//     );

//     res.json(rows);

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.get('/type_of_test', async (req, res) => {
//   try {
//     // Fetch type_of_test data from the database
//     const [typeOfTestRows] = await db.query('SELECT * FROM type_of_test');
//     res.json(typeOfTestRows);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // app.get('/type_of_test/:typeOfTestName', async (req, res) => {
// //   const { typeOfTestName } = req.params;
// //   try {
// //     // Fetch tests from the database based on typeOfTestId
// //     const [testRows] = await db.query('SELECT * FROM test_creation_table WHERE courseTypeOfTestId = ?', [typeOfTestName]);
// //     res.json(testRows);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: 'Internal Server Error' });
// //   }
// // });

// // app.get('/type_of_test/:typeOfTestId', async (req, res) => {
// //   const { typeOfTestId } = req.params;
// //   try {
// //     // Fetch tests from the database based on typeOfTestId
// //     const [testRows] = await db.query('SELECT * FROM test_creation_table WHERE courseTypeOfTestId = ?', [typeOfTestId]);
// //     res.json(testRows);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: 'Internal Server Error' });
// //   }
// // });

// app.get('/feachingtestbytype/:typeOfTestId', async (req, res) => {
//   const { typeOfTestId } = req.params;
//   try {
//     // Fetch tests from the database based on typeOfTestId
//     const [testRows] = await db.query('SELECT * FROM test_creation_table WHERE courseTypeOfTestId = ?', [typeOfTestId]);
//     res.json(testRows);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.get("/Test_List/:courseCreationId", async (req, res) => {
//   const { courseCreationId } = req.params;
//   try {
//     // Fetch exams from the database
//     const [rows] = await db.query(
//       "SELECT testCreationTableId ,TestName,testStartDate,	testEndDate,Duration,TotalQuestions, totalMarks FROM `test_creation_table` WHERE courseCreationId=? ",[courseCreationId]

//     );

//     res.json(rows);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // app.get('/Test_List/:courseCreationId/:typeOfTestId', async (req, res) => {
// //   const { courseCreationId, typeOfTestId } = req.params;
// //   try {
// //     // Fetch tests from the database based on course and type of test
// //     const [rows] = await db.query(
// //       "SELECT testCreationTableId, TestName, testStartDate, testEndDate, Duration, TotalQuestions, totalMarks FROM `test_creation_table` WHERE courseCreationId=?",
// //       [courseCreationId, typeOfTestId]
// //     );

// //     res.json(rows);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: "Internal Server Error" });
// //   }
// // });

// // SELECT * FROM `course_typeoftests` ORDER BY `course_typeoftests`.`courseTypeOfTestId` ASC

// app.get('/Test_List/:courseCreationId/:typeOfTestId', async (req, res) => {
//   const { courseCreationId, typeOfTestId } = req.params;
//   try {
//     // Fetch tests from the database based on course and type of test
//     const [rows] = await db.query(
//       "SELECT testCreationTableId, TestName, testStartDate, testEndDate, Duration, TotalQuestions, totalMarks FROM `test_creation_table` WHERE courseCreationId=?",
//       [courseCreationId, typeOfTestId]
//     );

//     res.json(rows);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.get('/instructions/:testCreationTableId', async (req, res) => {
//   const { testCreationTableId } = req.params;
//   try {
//     // Fetch instructions from the database based on testCreationTableId
//     const [instructionsRows] = await db.query(
//       'SELECT instruction.instructionId, instructionHeading, points, id FROM instructions_points ' +
//       'JOIN instruction ON instructions_points.instructionId = instruction.instructionId ' +
//       'JOIN test_creation_table ON instruction.instructionId = test_creation_table.instructionId ' +
//       'WHERE test_creation_table.testCreationTableId = ?',
//       [testCreationTableId]
//     );
//     res.json(instructionsRows);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.get('/subjects/:testCreationTableId', async (req, res) => {
//   const { testCreationTableId } = req.params;
//   try {
//     // Fetch instructions from the database based on testCreationTableId
//     const [subjects] = await db.query(
//       'SELECT subjects.subjectName FROM test_creation_table JOIN course_creation_table ON test_creation_table.courseCreationId = course_creation_table.courseCreationId JOIN course_subjects ON course_creation_table.courseCreationId = course_subjects.courseCreationId JOIN Subjects ON course_subjects.subjectId = Subjects.subjectId WHERE test_creation_table.testCreationTableId = ?',
//       [testCreationTableId]
//     );
//     res.json(subjects);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
// //getAllImages
// app.get('/getAllImages', async (req, res) => {
//   try {
//     const questions = await getImagesByType('questions', 'question_img');
//     const options = await getImagesByType('options', 'option_img');
//     // const solutions = await getImagesByType('solution', 'solution_img');

//     const combinedImages = combineImages(questions, options);

//     res.json(combinedImages);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error fetching images from the database.');
//   }
// });

// async function getImagesByType(table, column) {
//   try {
//     const query = `SELECT question_id, ${column} FROM ${table} ORDER BY question_id`;
//     const [results] = await db.query(query);

//     return results.map(result => ({
//       question_id: result.question_id,
//       image: `data:image/png;base64,${result[column].toString('base64')}`,
//     }));
//   } catch (err) {
//     console.error(`Error fetching images from ${table}: ${err}`);
//     throw err;
//   }
// }

// function combineImages(questions, options) {
//   const combinedImages = [];

//   for (let i = 0; i < questions.length; i++) {
//     const questionImage = questions[i].image;
//     const optionImages = options.filter(opt => opt.question_id === questions[i].question_id).map(opt => opt.image);
//     // const solutionImage = solutions.find(sol => sol.question_id === questions[i].question_id)?.image;

//     combinedImages.push({
//       questionImage,
//       optionImages,
//       // solutionImage,
//     });
//   }

//   return combinedImages;
// }

// app.get('/fetchSections/:testCreationTableId', async (req, res) => {
//   const { testCreationTableId } = req.params;
//   try {
//     const [rows] = await db.query('SELECT * FROM sections WHERE testCreationTableId = ?', [testCreationTableId]);
//     res.json(rows);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // app.get("/quiz_all/:testCreationTableId", async (req, res) => {
// //   const testCreationTableId = req.params.testCreationTableId;

// //   const sql = `
// //     SELECT tt.testCreationTableId, s.sectionId, q.qustion_id, q.question_img, o.option_id, o.option_img, o.option_index
// //     FROM test_creation_table tt, sections s, questions q, options o
// //     WHERE tt.testCreationTableId=q.testCreationTableId AND s.testCreationTableId=tt.testCreationTableId AND q.qustion_id=o.question_id AND tt.testCreationTableId=?
// //   `;

// //   try {
// //     const results = await queryDatabase(sql, [testCreationTableId]);

// //     const sections = {};

// //     results.forEach((row) => {
// //       const { sectionId, sectionName, qustion_id, question_img, Option_Index, option_img } = row;

// //       if (!sections[sectionName]) {
// //         sections[sectionName] = {
// //           sectionId,
// //           sectionName,
// //           questions: [],
// //         };
// //       }

// //       const question = sections[sectionName].questions.find(q => q.qustion_id === qustion_id);
// //       if (!question) {
// //         sections[sectionName].questions.push({
// //           qustion_id,
// //           userAnswers: "",
// //           isvisited: 0,
// //           question_img: question_img.toString('base64'),
// //           option_img: [],
// //         });
// //       }

// //       const option = {
// //         Option_Index,
// //         option_img: option_img.toString('base64'),
// //         optiontype
// //       };

// //       sections[sectionName].questions.find(q => q.qustion_id === qustion_id).option_img.push(option);
// //     });

// //     res.json(sections);
// //   } catch (err) {
// //     console.error('Error querying the database: ' + err.message);
// //     res.status(500).json({ error: 'Error fetching testCreationTableId' });
// //   }
// // });

// // function queryDatabase(sql, params) {
// //   return new Promise((resolve, reject) => {
// //     db.query(sql, params, (err, results) => {
// //       if (err) {
// //         reject(err);
// //       } else {
// //         resolve(results);
// //       }
// //     });
// //   });
// // }

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// // ----------------------------------------------------end h code--------------------------------------------------------------------

// /******************************one-one questions images H*************************************/

// // const express = require('express');
// // const multer = require('multer');
// // const cors = require('cors');
// // const mammoth = require('mammoth');
// // const mysql = require('mysql');
// // const fs = require('fs');
// // const cheerio = require('cheerio');
// // const app = express();

// // const port = 4009;

// // const db = mysql.createConnection({
// //     host: "localhost",
// //     user: "root",
// //     password: "",
// //     database: "egquizdatabase",
// // });

// // db.connect((err) => {
// //     if (err) {
// //         console.error('Error connecting to MySQL:', err);
// //     } else {
// //         console.log("Connected to MySQL");
// //     }
// // });

// // app.use(cors());

// // const storage = multer.diskStorage({
// //     destination: (req, file, cb) => {
// //         cb(null, 'uploads/'); // Define the folder where the DOCX files will be temporarily stored.
// //     },
// //     filename: (req, file, cb) => {
// //         cb(null, file.originalname);
// //     },
// // });

// // const upload = multer({ storage });

// // app.post('/upload', upload.single('document'), async (req, res) => {
// //     const docxFilePath = `uploads/${req.file.filename}`;
// //     const documentName = req.file.originalname; // Assuming you have a document name

// //     const outputDir = `uploads/${documentName}_images`;

// //     // Create a directory for saving images.
// //     if (!fs.existsSync(outputDir)) {
// //         fs.mkdirSync(outputDir);
// //     }

// //     try {
// //         // Insert the document information into the documents table
// //         const insertDocumentSql = 'INSERT INTO documents (document_name) VALUES (?)';
// //         const documentResult = await db.query(insertDocumentSql, [documentName]);
// //         const documentId = documentResult.insertId;

// //         const result = await mammoth.convertToHtml({ path: docxFilePath });
// //         const htmlContent = result.value;
// //         const $ = cheerio.load(htmlContent);

// //         $('img').each(async (i, element) => {
// //             const base64Data = $(element).attr('src').replace(/^data:image\/\w+;base64,/, '');
// //             const imageBuffer = Buffer.from(base64Data, 'base64');
// //             const imageName = `image_${i}.png`;

// //             fs.writeFileSync(`${outputDir}/${imageName}`, imageBuffer);

// //             // Insert the image information into the images table
// //             const insertImageSql = 'INSERT INTO img (document_id, image_name, image_data) VALUES (?, ?, ?)';
// //             await db.query(insertImageSql, [documentId, imageName, imageBuffer]);
// //         });

// //         res.send('Images extracted and saved successfully.');
// //     } catch (error) {
// //         console.error(error);
// //         res.status(500).send('Error extracting images.');
// //     }
// // });

// // app.get('/images/:id', (req, res) => {
// //     const id = req.params.id; // Use req.params.id to get the ID from the route

// //     // Query the database to fetch images for the specified document_id
// //     const selectImagesSql = 'SELECT image_data FROM images WHERE id = ?'; // Change "id" to "document_id"
// //     db.query(selectImagesSql, [id], (error, results) => {
// //         if (error) {
// //             console.error(error);
// //             res.status(500).send('Error fetching images from the database.');
// //         } else {
// //             // Send the images as a JSON response
// //             const images = results.map(result => {
// //                 return {
// //                     image_name: result.image_name,
// //                     image_data: result.image_data.toString('base64'),
// //                 };
// //             });
// //             res.json(images);
// //         }
// //     });
// // });

// // // app.get('/img', (req, res) => {
// // //     // Use req.params.id to get the ID from the route

// // //     // Query the database to fetch images for the specified document_id
// // //     const selectImagesSql = 'SELECT * FROM img '; // Change "id" to "document_id"
// // //     db.query(selectImagesSql, (error, results) => {
// // //         if (error) {
// // //             console.error(error);
// // //             res.status(500).send('Error fetching images from the database.');
// // //         } else {
// // //             // Send the images as a JSON response
// // //             const images = results.map(result => {
// // //                 return {
// // //                     image_name: result.image_name,
// // //                     image_data: result.image_data.toString('base64'),
// // //                 };
// // //             });
// // //             res.json(images);
// // //         }
// // //     });
// // // });

// // app.listen(port, () => {
// //     console.log(`Server is running on port ${port}`);
// // });

const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
const multer = require("multer");
const mammoth = require("mammoth");
const cheerio = require("cheerio");
const path = require("path");
const fs = require("fs").promises;
const app = express();
const port = 4009;

app.use(express.json());
app.use(cors());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "admin_project",
});

const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const uploadDir = "uploads/";
    await fs.mkdir(uploadDir, { recursive: true });
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    // cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    cb(null, Date.now() + path.extname(file.originalname));
    // cb(null, file.originalname);
  },
});


  

const upload = multer({ storage });


//_________________________________________________FRONT END_______________________________________

app.get("/examData", async (req, res) => {
  // FetchData
  try {
    const [rows] = await db.query("SELECT * FROM exams");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/feachingcourse/:examId", async (req, res) => {
  const { examId } = req.params;
  try {
    // Fetch exams from the database
    const [rows] = await db.query(
      "SELECT * FROM course_creation_table WHERE examId = ?",
      [examId]
    );

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/feachingtest/:courseCreationId/:typeOfTestId", async (req, res) => {
  const { courseCreationId, typeOfTestId } = req.params;
  try {
    // Fetch tests from the database based on courseCreationId and typeOfTestId
    const [testRows] = await db.query(
      "SELECT * FROM test_creation_table WHERE courseCreationId = ? AND courseTypeOfTestId = ?",
      [courseCreationId, typeOfTestId]
    );
    res.json(testRows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/feachingtest/:courseCreationId", async (req, res) => {
  const { courseCreationId } = req.params;
  try {
    // Fetch exams from the database
    const [rows] = await db.query(
      "SELECT * FROM test_creation_table WHERE 	courseCreationId  = ?",
      [courseCreationId]
    );

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/feachingtypeoftest", async (req, res) => {
  try {
    // Fetch type_of_test data from the database
    const [typeOfTestRows] = await db.query("SELECT * FROM type_of_test");
    res.json(typeOfTestRows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// app.get("/feachingtestbytype/:typeOfTestId", async (req, res) => {
//   const { typeOfTestId } = req.params;
//   try {
//     // Fetch tests from the database based on typeOfTestId
//     const [testRows] = await db.query(
//       "SELECT * FROM test_creation_table WHERE courseTypeOfTestId = ?",
//       [typeOfTestId]
//     );
//     res.json(testRows);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

app.get("/fetchinstructions/:testCreationTableId", async (req, res) => {
  const { testCreationTableId } = req.params;
  try {
    // Fetch instructions from the database based on testCreationTableId
    const [instructionsRows] = await db.query(
      "SELECT instruction.instructionId, instructionHeading, points, id FROM instructions_points " +
        "JOIN instruction ON instructions_points.instructionId = instruction.instructionId " +
        "JOIN test_creation_table ON instruction.instructionId = test_creation_table.instructionId " +
        "WHERE test_creation_table.testCreationTableId = ?",
      [testCreationTableId]
    );
    res.json(instructionsRows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.get("/fetchinstructions/:testCreationTableId", async (req, res) => {
  const { testCreationTableId } = req.params;
  try {
    // Fetch instructions from the database based on testCreationTableId
    const [instructionsRows] = await db.query(
      "SELECT instruction.instructionId, instructionHeading, points, id, test_creation_table.testCreationTableId, course_subjects.subjectId " +
        "FROM instructions_points " +
        "JOIN instruction ON instructions_points.instructionId = instruction.instructionId " +
        "JOIN test_creation_table ON instruction.instructionId = test_creation_table.instructionId " +
        "JOIN course_creation_table ON test_creation_table.courseCreationId = course_creation_table.courseCreationId " +
        "JOIN course_subjects ON course_creation_table.courseCreationId = course_subjects.courseCreationId " +
        "WHERE test_creation_table.testCreationTableId = ?",
      [testCreationTableId]
    );
    res.json(instructionsRows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});





app.get('/subjects/:testCreationTableId', async (req, res) => {
  const { testCreationTableId } = req.params;
  try {
    // Fetch instructions from the database based on testCreationTableId
    const [subjects] = await db.query(
      'SELECT subjects.subjectName FROM test_creation_table JOIN course_creation_table ON test_creation_table.courseCreationId = course_creation_table.courseCreationId JOIN course_subjects ON course_creation_table.courseCreationId = course_subjects.courseCreationId JOIN Subjects ON course_subjects.subjectId = Subjects.subjectId WHERE test_creation_table.testCreationTableId = ?',
      [testCreationTableId]
    );
    res.json(subjects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get("/fetchSections/:testCreationTableId", async (req, res) => {
  const { testCreationTableId } = req.params;
  try {
    const [rows] = await db.query(
      "SELECT * FROM sections WHERE testCreationTableId = ?",
      [testCreationTableId]
    );
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/upload", upload.single("document"), async (req, res) => {
  const docxFilePath = `uploads/${req.file.filename}`;
  const outputDir = `uploads/${req.file.originalname}_images`;

  const docName = `${req.file.originalname}`;
  try {
    await fs.mkdir(outputDir, { recursive: true });
    const result = await mammoth.convertToHtml({ path: docxFilePath });
    const htmlContent = result.value;
    const $ = cheerio.load(htmlContent);
    const textResult = await mammoth.extractRawText({ path: docxFilePath });
    const textContent = textResult.value;
    const textSections = textContent.split("\n\n");

    // Insert documentName and get documentId
    const [documentResult] = await db.query("INSERT INTO ots_document SET ?", {
      documen_name: docName,
      testCreationTableId: req.body.testCreationTableId,
      subjectId: req.body.subjectId,
    });
    const document_Id = documentResult.insertId;

    // Get all images in the order they appear in the HTML
    const images = [];
    $("img").each(function (i, element) {
      const base64Data = $(this)
        .attr("src")
        .replace(/^data:image\/\w+;base64,/, "");
      const imageBuffer = Buffer.from(base64Data, "base64");
      images.push(imageBuffer);
    });

    let j = 0;
    let Question_id;
    for (let i = 0; i < images.length; i++) {
      if (j == 0) {
        const questionRecord = {
          question_img: images[i],
          testCreationTableId: req.body.testCreationTableId,
          sectionId: req.body.sectionId,
          document_Id: document_Id,
          subjectId: req.body.subjectId,
        };
        console.log(j);
        Question_id = await insertRecord("questions", questionRecord);
        j++;
      } else if (j > 0 && j < 5) {
        const optionRecord = {
          option_img: images[i],
          question_id: Question_id,
        };
        console.log(j);
        await insertRecord("options", optionRecord);
        j++;
      } else if (j == 5) {
        const solutionRecord = {
          solution_img: images[i],
          question_id: Question_id,
        };
        console.log(j);
        await insertRecord("solution", solutionRecord);
        j = 0;
      }
    }
    res.send(
      "Text content and images extracted and saved to the database with the selected topic ID successfully."
    );
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("Error extracting content and saving it to the database.");
  }
});

async function insertRecord(table, record) {
  try {
    const [result] = await db.query(`INSERT INTO ${table} SET ?`, record);
    console.log(`${table} id: ${result.insertId}`);
    return result.insertId;
  } catch (err) {
    console.error(`Error inserting data into ${table}: ${err}`);
    throw err;
  }
}
// end -------------------


// doc name getting 
app.get("/documentName", async (req, res) => {
  try {
    const query =
      "SELECT document_Id, testCreationTableId, documen_name, subjectId FROM ots_document";
    const [rows] = await db.query(query);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// end ----------

// get doc upload iamges ---------------
// app.get("/getPaperData/:testCreationTableId/:subjectId", async (req, res) => {
//   try {
//     const subjectId = req.params.subjectId;
//     const testCreationTableId = req.params.testCreationTableId;

//     // Fetch document data based on subjectId and testCreationTableId
//     // const documentData = await getDocumentBySubjectAndTestCreationId(subjectId, testCreationTableId);

//     // if (!documentData) {
//     //   return res.status(404).send("Document not found");
//     // }

//     // const document_Id = documentData.document_Id;

//     // Fetch question data based on subjectId and document_Id
//     const questions = await getQuestionsBySubjectAndDocumentId(subjectId, testCreationTableId);

//     // Fetch option data based on questions and document_Id
//     const options = await getOptionsByQuestionsAndDocumentId(questions, testCreationTableId);

//     // Fetch solution data based on questions and document_Id
//     const solutions = await getSolutionsByQuestionsAndDocumentId(questions, testCreationTableId);

//     res.json({
//       // document: documentData,
//       questions,
//       options,
//       solutions,
//     });
    
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error fetching data from the database.');
//   }
// });


// // async function getDocumentBySubjectAndTestCreationId(subjectId, testCreationTableId) {
// //   try {
// //     const query = `
// //       SELECT document_Id, testCreationTableId, documen_name
// //       FROM ots_document
// //       WHERE subjectId = ? AND testCreationTableId = ?
// //     `;
// //     const [result] = await db.query(query, [subjectId, testCreationTableId]);
// //     return result[0];
// //   } catch (err) {
// //     console.error(`Error fetching document details: ${err}`);
// //     throw err;
// //   }
// // }


// // Reusable function to get questions data based on subjectId and document_Id
// async function getQuestionsBySubjectAndDocumentId(subjectId, testCreationTableId) {
//   try {
//     const query = `
//       SELECT question_id, question_img
//       FROM questions
//       WHERE subjectId = ? AND testCreationTableId = ?  
//     `;
//     const [results] = await db.query(query, [subjectId, testCreationTableId]);
//     const optionsWithBase64 = results.map(option => ({
//       question_id: option.question_id,
//       question_img: option.question_img.toString('base64'),
//     }));
//     return optionsWithBase64;
//   } catch (err) {
//     console.error(`Error fetching questions: ${err}`);
//     throw err;
//   }
// }

// // Reusable function to get options data based on questions and document_Id
// async function getOptionsByQuestionsAndDocumentId(questions, testCreationTableId) {
//   try {
//     const questionIds = questions.map(question => question.question_id);
//     const query = `
//     SELECT question_id, option_img
//     FROM options
//     WHERE question_id IN (?) 
//     `;
//     const [results] = await db.query(query, [questionIds, testCreationTableId]);

//     // Convert BLOB data to base64 for sending in the response
//     const optionsWithBase64 = results.map(option => ({
//       question_id: option.question_id,
//       option_img: option.option_img.toString('base64'),
//     }));

//     return optionsWithBase64;
//   } catch (err) {
//     console.error(`Error fetching options: ${err.message}`);
//     throw err;
//   }
// }


// // Reusable function to get solutions data based on questions and document_Id
// async function getSolutionsByQuestionsAndDocumentId(questions, testCreationTableId) {
//   try {
//     const questionIds = questions.map(question => question.question_id);
//     const query = `
//       SELECT question_id, solution_img
//       FROM solution
//       WHERE question_id IN (?) 
//     `;
//     const [results] = await db.query(query, [questionIds, testCreationTableId]);

//     // Convert BLOB data to base64 for sending in the response
//     const solutionsWithBase64 = results.map(solution => ({
//       question_id: solution.question_id,
//       solution_img: solution.solution_img.toString('base64'),
//     }));

//     return solutionsWithBase64;
//   } catch (err) {
//     console.error(`Error fetching solutions: ${err}`);
//     throw err;
//   }
// }

// function combineImage(questions, options, solutions) {
//   const combinedImages = [];

//   for (let i = 0; i < questions.length; i++) {
//     const questionImage = questions[i].question_img;
//     const optionImages = options
//       .filter((opt) => opt.question_id === questions[i].question_id)
//       .map((opt) => opt.option_img);
//     const solutionImage = solutions.find(
//       (sol) => sol.question_id === questions[i].question_id
//     )?.solution_img;

//     combinedImages.push({
//       questionImage,
//       optionImages,
//       solutionImage,
//     });
//   }

//   return combinedImages;
// }
app.get("/getPaperData/:testCreationTableId", async (req, res) => {
  try {
  
    const testCreationTableId = req.params.testCreationTableId;
    // Fetch question data based on subjectId and document_Id
    const questions = await getQuestionsBytestCreationTableId( testCreationTableId);
    // Fetch option data based on questions and document_Id
    const options = await getOptionsByQuestionsAndTestCreationTableId(questions, testCreationTableId);

    res.json({
      questions,
      options,
    });
    
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data from the database.');
  }
});

// Reusable function to get questions data based on subjectId and document_Id
async function getQuestionsBytestCreationTableId(testCreationTableId) {
  try {
    const query = `
      SELECT question_id, question_img
      FROM questions
      WHERE  testCreationTableId = ?  
    `;
    const [results] = await db.query(query, [testCreationTableId]);
    const optionsWithBase64 = results.map(option => ({
      question_id: option.question_id,
      question_img: option.question_img.toString('base64'),
    }));
    return optionsWithBase64;
  } catch (err) {
    console.error(`Error fetching questions: ${err}`);
    throw err;
  }
}

// Reusable function to get options data based on questions and document_Id
async function getOptionsByQuestionsAndTestCreationTableId(questions, testCreationTableId) {
  try {
    const questionIds = questions.map(question => question.question_id);
    const query = `
    SELECT question_id, option_img
    FROM options
    WHERE question_id IN (?) 
    `;
    const [results] = await db.query(query, [questionIds, testCreationTableId]);

    // Convert BLOB data to base64 for sending in the response
    const optionsWithBase64 = results.map(option => ({
      question_id: option.question_id,
      option_img: option.option_img.toString('base64'),
    }));

    return optionsWithBase64;
  } catch (err) {
    console.error(`Error fetching options: ${err.message}`);
    throw err;
  }
}

function combineImage(questions, options) {
  const combinedImages = [];

  for (let i = 0; i < questions.length; i++) {
    const questionImage = questions[i].question_img;
    const optionImages = options
      .filter((opt) => opt.question_id === questions[i].question_id)
      .map((opt) => opt.option_img);

    combinedImages.push({
      questionImage,
      optionImages,
    });
  }

  return combinedImages;
}

app.get("/getPaperData/:testCreationTableId/:subjectId", async (req, res) => {
  try {
    const subjectId = req.params.subjectId;
    const testCreationTableId = req.params.testCreationTableId;
  
  
    // Fetch question data based on subjectId and document_Id
    const questions = await getQuestionsBySubjectAndDocumentId(subjectId, testCreationTableId);

    // Fetch option data based on questions and document_Id
    const options = await getOptionsByQuestionsAndDocumentId(questions, testCreationTableId);

  
    res.json({
      questions,
      options,
    });
    
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data from the database.');
  }
});

// Reusable function to get questions data based on subjectId and document_Id
async function getQuestionsBySubjectAndDocumentId(subjectId, testCreationTableId) {
  try {
    const query = `
      SELECT question_id, question_img
      FROM questions
      WHERE subjectId = ? AND testCreationTableId = ?  
    `;
    const [results] = await db.query(query, [subjectId, testCreationTableId]);
    const optionsWithBase64 = results.map(option => ({
      question_id: option.question_id,
      question_img: option.question_img.toString('base64'),
    }));
    return optionsWithBase64;
  } catch (err) {
    console.error(`Error fetching questions: ${err}`);
    throw err;
  }
}

// Reusable function to get options data based on questions and document_Id
async function getOptionsByQuestionsAndDocumentId(questions, testCreationTableId) {
  try {
    const questionIds = questions.map(question => question.question_id);
    const query = `
    SELECT question_id, option_img
    FROM options
    WHERE question_id IN (?) 
    `;
    const [results] = await db.query(query, [questionIds, testCreationTableId]);

    // Convert BLOB data to base64 for sending in the response
    const optionsWithBase64 = results.map(option => ({
      question_id: option.question_id,
      option_img: option.option_img.toString('base64'),
    }));

    return optionsWithBase64;
  } catch (err) {
    console.error(`Error fetching options: ${err.message}`);
    throw err;
  }
}


function combineImage(questions, options) {
  const combinedImages = [];

  for (let i = 0; i < questions.length; i++) {
    const questionImage = questions[i].question_img;
    const optionImages = options
      .filter((opt) => opt.question_id === questions[i].question_id)
      .map((opt) => opt.option_img);
   

    combinedImages.push({
      questionImage,
      optionImages,
      
    });
  }

  return combinedImages;
}




// app.get("quiz_all/:testCreationTableId", async (req, res) => {
//   const testCreationTableId = req.params.testCreationTableId;

//   const sql = `
//         SELECT tt.testCreationTableId, s.sectionId, q.question_id, q.question_img, o.option_id, o.option_img, o.option_index
//         FROM test_creation_table tt, sections s, questions q, options o
//         WHERE tt.testCreationTableId=q.testCreationTableId AND s.testCreationTableId=tt.testCreationTableId AND q.question_id=o.question_id AND tt.testCreationTableId=?
//       `;

//   try {
//     const results = await queryDatabase(sql, [testCreationTableId]);

//     const sections = {};

//     results.forEach((row) => {
//       const {
//         sectionId,
//         sectionName,
//         question_id,
//         question_img,
//         Option_Index,
//         option_img,
//       } = row;

//       if (!sections[sectionName]) {
//         sections[sectionName] = {
//           sectionId,
//           sectionName,
//           questions: [],
//         };
//       }

//       const question = sections[sectionName].questions.find(
//         (q) => q.question_id === question_id
//       );

//       if (!question) {
//         sections[sectionName].questions.push({
//           question_id,
//           userAnswers: "",
//           isvisited: 0,
//           question_img: question_img.toString("base64"),
//           option_img: [],
//         });
//       }

//       const option = {
//         Option_Index,
//         option_img: option_img.toString("base64"),
//         optiontype,
//       };

//       sections[sectionName].questions
//         .find((q) => q.question_id === question_id)
//         .option_img.push(option);
//     });

//     res.json(sections);
//   } catch (err) {
//     console.error("Error querying the database: " + err.message);
//     res.status(500).json({ error: "Error fetching testCreationTableId" });
//   }
// });

// function queryDatabase(sql, params) {
//   return new Promise((resolve, reject) => {
//     db.query(sql, params, (err, results) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(results);
//       }
//     });
//   });
// }

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
