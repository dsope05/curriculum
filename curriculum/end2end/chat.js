const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const db = require('./8.js');
// All your code should go here

app.use(cookieParser());
app.listen(6875, () => console.log('listening on 6875'));

app.get('/chat', (req, res) => {
  if (!req.cookies.name) {
    return res.redirect('/login');
  }
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/login', (req, res) => {
  if (req.query.name) {
    res.cookie('name', req.query.name);
  }
  res.sendFile(__dirname + '/public/login.html');
});


app.get('/newMessage', (req, res) => {
  const { name, message } = req.query;
  db.add({ name, message });
  res.json(db.messages());
});

app.get('/getMessages', (req, res) => {
  if (req.cookies.name) {
    return res.json(db.messages());
  }
  return res.status(400);
});

app.get('/getUser', (req, res) => {
   return res.json(req.cookies.name);
});


app.get('/logout', (req, res) => {
   res.cookie('name', '');
  return res.send('ok');
});
