const express = require('express');
const cors = require('cors');
const db = require('./database/database');


const app = express();
const PORT = 3001;
const URL = process.env.URL || 'http://localhost';

app.use(express.json());
app.use(cors());
db.initDB();

app.listen(PORT, () => {
    console.log(`Server listening on ${URL}:${PORT}`);
});