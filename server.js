const express = require('express');
const connectDB = require('./config/db');

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.get('/', (req, res) => {
  res.send('API running');
});

app.listen(port, () => console.log(`Server started on port: ${port}`));
