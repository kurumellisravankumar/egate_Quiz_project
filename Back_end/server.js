const express = require('express');
const multer = require('multer');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const port = 1077;

// Create a MySQL connection pool for better performance
const db = mysql.createPool({
    connectionLimit: 10, // Adjust the connection limit as needed
    host: 'localhost',
    user: 'root',
    password: 'naveen',
    database: 'egate_quiz_signup_api',
});

app.use(cors());
app.use(express.json()); // Parse JSON request bodies

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Define the folder where the files will be temporarily stored.
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

// Signup route
app.post('/signup', (req, res) => {
    const { name, emailAddress, mobileNumber, password, state, city, course } = req.body;
    const values = { name, emailAddress, mobileNumber, password, state, city, course };

    const sql = 'INSERT INTO signup SET ?';

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error in database operations' });
        }

        console.log('Record inserted successfully');
        return res.status(200).json({ success: true, message: 'Record inserted successfully' });
    });
});

// Get all signups
app.get('/signups', (req, res) => {
    const sql = 'SELECT * FROM signup';

    db.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error in database operations' });
        }

        return res.status(200).json(result);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
