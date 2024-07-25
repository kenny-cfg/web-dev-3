const express = require('express');
const app = express()

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/frontend/index.html');
})

app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/frontend/index.html');
})

app.get('/index.js', (req, res) => {
  res.sendFile(__dirname + '/frontend/index.js');
})

app.get('/index.css', (req, res) => {
  res.sendFile(__dirname + '/frontend/index.css');
})

app.listen(3000, () => {
  console.log('Listening on port 3000');
})