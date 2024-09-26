const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
  res.send('Hello, World! CI/CD Pipeline is running!');
});

app.get('/test', (req, res) => {
  res.send('Test route working fine!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
