const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
//defining middleware to set headers
const setHeaders = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
};


// configure body parser
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(setHeaders);
// create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'HEMANTH',
  password: 'H@12345',
  database: 'HEMANTH'
});

// connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

// get all users
app.get('/api/employees', (req, res) => {

  db.query('SELECT * FROM employees', (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

// get user by id
app.get('/api/employees/:ID', (req, res) => {
  const ID = req.params.ID;
  db.query(`SELECT * FROM employees WHERE ID = ${ID}`, (err, result) => {
    if (err) {
      throw err;
    }

    res.send(result);
  });
});

// create a new user
app.post('/api/employees', (req, res) => {
  const {ID, first_name, last_name, designation } = req.body;
  db.query(`INSERT INTO employees (ID, first_name, last_name, designation) VALUES ('${ID}', '${first_name}', '${last_name}', '${designation}')`, (err, result) => {
    if (err) {
      throw err;
    }

    res.send('Employee created successfully');
  });
});

// update user by id
app.put('/api/employees/:ID', (req, res) => {
  const ID = req.params.ID;
  const { first_name, last_name, designation } = req.body;
  db.query(`UPDATE employees SET first_name = '${first_name}', last_name = '${last_name}', designation = '${designation}' WHERE ID = ${ID}`, (err, result) => {
    if (err) {
      throw err;
    }

    res.send('Employee updated successfully');
  });
});

// delete user by id
app.delete('/api/employees/:ID', (req, res) => {
  const ID = req.params.ID;
  db.query(`DELETE FROM employees WHERE ID = ${ID}`, (err, result) => {
    if (err) {
      throw err;
    }

    res.send('Employee deleted successfully');
  });
});

// start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
