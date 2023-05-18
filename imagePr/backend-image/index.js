const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors()); 
const connection = mysql.createConnection({
  host: 'database',
  port:3306,
  user: 'user',
  password: 'password',
  database: 'News_Db',
});

app.get('/getUrgentNews', (req, res) => {
  connection.query('SELECT * FROM News', (error, results) => {
    if (error) {
      console.error('Error querying MySQL database:', error);
      res.status(500).send('Error querying MySQL database');
    } else {
      res.json(results);
    }
  });
});

const port = 8080;
app.listen(port, () => {
  console.log(`Backend service running on port ${port}`);
});
