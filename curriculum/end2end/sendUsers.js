const fs = require('fs');
const express = require('express');
const app = express();
// All your code should go here

app.listen(6875, () => console.log('listening on 6875'));

let usersWithoutMe = [];
fs.readdir('/home', (err, files)=> {
  usersWithoutMe = files.filter(file => file !== 'dsoper')
});

  app.get('/hello', (req, res) => {
    res.send(`<h3> ${ usersWithoutMe } </h3>`);
  });
