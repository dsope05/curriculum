const express = require('express');
const app = express();
// All your code should go here

app.listen(6875, () => console.log('listening on 6875'));

const messages = [];

app.get('/newMessage', (req, res) => {
  console.log('reqqyery', req.query);
  const { name, message } = req.query;
  messages.push({ name, message });
  res.json(messages);
});

app.get('/messages', (req, res) => {
  res.json(messages);
})

