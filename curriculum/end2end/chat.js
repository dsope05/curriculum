const express = require('express');
const app = express();
// All your code should go here

app.listen(6875, () => console.log('listening on 6875'));

const messages = [];

app.get('/chat', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/newMessage', (req, res) => {
  console.log('reqqyery', req.query);
  const { name, message } = req.query;
  messages.push({ name, message });
  res.json(messages);
});

app.get('/getMessages', (req, res) => {
  res.json(messages);
});

